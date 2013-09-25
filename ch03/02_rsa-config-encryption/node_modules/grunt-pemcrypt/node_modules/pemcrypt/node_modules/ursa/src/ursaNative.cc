// Copyright 2012 The Obvious Corporation.

#include "ursaNative.h"
#include <node_buffer.h>
#include <stdio.h>
#include <stdlib.h>

#include <openssl/ssl.h>
#include <openssl/err.h>
#include <openssl/pem.h>
#include "asprintf.h"

using namespace v8;

#ifdef _WIN32
#  include <malloc.h>
#  define VAR_ARRAY(type, name, size)  type* name = (type*)_alloca(size)
#else
#  define VAR_ARRAY(type, name, size)  type name[size]
#endif



/*
 * Initialization and binding
 */

/**
 * Helper for prototype binding.
 */
#define BIND(proto, highName, lowName) \
    (proto)->Set(String::NewSymbol(#highName), \
        FunctionTemplate::New(lowName)->GetFunction())

/**
 * Top-level initialization function.
 */
void init(Handle<Object> target) {
    NODE_DEFINE_CONSTANT(target, RSA_PKCS1_PADDING);
    NODE_DEFINE_CONSTANT(target, RSA_PKCS1_OAEP_PADDING);
    BIND(target, textToNid, TextToNid);
    RsaWrap::InitClass(target);

#ifdef _WIN32 
    // On Windows, we can't use Node's OpenSSL, so we link
    // to a standalone OpenSSL library. Therefore, we need
    // to initialize OpenSSL separately.

    //TODO: Do I need to free these?
    //I'm not sure where to call ERR_free_strings() and EVP_cleanup()
    OpenSSL_add_all_digests();
    OpenSSL_add_all_algorithms();
    OpenSSL_add_all_ciphers();
    ERR_load_crypto_strings();
#endif
}

NODE_MODULE(ursaNative, init)


/*
 * Helper functions
 */

/**
 * Schedule the current SSL error as a higher-level exception.
 */
static void scheduleSslException() {
    char *err = ERR_error_string(ERR_get_error(), NULL);
    Local<Value> exception = Exception::Error(String::New(err));

    ERR_clear_error();
    ThrowException(exception);
}

/**
 * Schedule an "allocation failed" exception. This (tries) to allocate
 * as well, which very well could (probably will) fail too, but it's the
 * best we can do in a bad situation.
 */
static void scheduleAllocException() {
    ThrowException(Exception::Error(String::New("Allocation failed.")));
}

/**
 * Convert the given (BIGNUM *) to a Buffer of unsigned big-endian
 * contents. Returns a Buffer-containing handle on success. Schedules an
 * exception and returns Undefined() on failure.
 */
static Handle<Value> bignumToBuffer(BIGNUM *number) {
    int length = BN_num_bytes(number);
    node::Buffer *result = node::Buffer::New(length);

    if (result == NULL) {
        scheduleAllocException();
        return Undefined();
    }

    if (BN_bn2bin(number, (unsigned char *) node::Buffer::Data(result)) < 0) {
        scheduleSslException();
        delete result;
        return Undefined();
    }

    // TODO: Is there a more idiomatic way of getting a handle from
    // a Buffer?
    return result->handle_;
}

/**
 * Convert the given memory-based (BIO *) to a Buffer of its contents.
 * Returns a Buffer-containing handle on success. Schedules an
 * exception and returns Undefined() on failure. In either case, the
 * BIO is freed by the time this function returns.
 *
 * As a special case to help with error handling, if given a NULL
 * argument, this simply returns Undefined().
 */
static Handle<Value> bioToBuffer(BIO *bio) {
    if (bio == NULL) {
        return Undefined();
    }

    char *data;
    long length = BIO_get_mem_data(bio, &data);
    node::Buffer *result = node::Buffer::New(length);

    if (result == NULL) {
        scheduleAllocException();
        BIO_vfree(bio);
        return Undefined();
    }

    memcpy(node::Buffer::Data(result), data, length);
    BIO_vfree(bio);

    // TODO: Is there a more idiomatic way of getting a handle from
    // a Buffer?
    return result->handle_;
}

/**
 * Check that the given argument index exists. Returns true if so.
 * Schedules an exception and returns false if not.
 */
static bool hasArgument(const Arguments& args, int index) {
    if (args.Length() > index) {
        return true;
    }

    char *message = NULL;
    asprintf(&message, "Missing args[%d].", index);
    ThrowException(Exception::TypeError(String::New(message)));
    free(message);
    return false;
}

/**
 * Check that the given argument index exists and is a Buffer. Returns
 * true if so. Schedules an exception and returns false if not.
 */
static bool isBuffer(const Arguments& args, int index) {
    if (!hasArgument(args, index)) { return false; }

    if (!node::Buffer::HasInstance(args[index])) {
        char *message = NULL;
        asprintf(&message, "Expected a Buffer in args[%d].", index);
        ThrowException(Exception::TypeError(String::New(message)));
        free(message);
        return false;
    }

    return true;
}

/**
 * Check that the given argument index exists and is a string. Returns
 * true if so. Schedules an exception and returns false if not.
 */
static bool isString(const Arguments& args, int index) {
    if (!hasArgument(args, index)) { return false; }

    if (!args[index]->IsString()) {
        char *message = NULL;
        asprintf(&message, "Expected a string in args[%d].", index);
        ThrowException(Exception::TypeError(String::New(message)));
        free(message);
        return false;
    }

    return true;
}

/**
 * Get a Buffer out of args[0], converted to a freshly-allocated
 * memory BIO. Returns a non-null pointer on success. On failure,
 * schedules an exception and returns NULL.
 */
static BIO *getArg0Bio(const Arguments& args) {
    if (!isBuffer(args, 0)) { return NULL; }

    Local<Object> buf = args[0]->ToObject();
    char *data = node::Buffer::Data(buf);
    ssize_t length = node::Buffer::Length(buf);
    BIO *bio = BIO_new_mem_buf(data, length);

    if (bio == NULL) { scheduleSslException(); }

    return bio;
}

/**
 * Get a Buffer out of args[] at the given index, yielding a data
 * pointer and length.  Returns a non-null pointer on success and sets
 * the given length pointer. On failure, schedules an exception and
 * returns NULL.
 */
static void *getArgDataAndLength(const Arguments& args, int index,
                                 int *lengthPtr) {
    if (!isBuffer(args, index)) { return NULL; }

    Local<Object> buf = args[index]->ToObject();

    *lengthPtr = node::Buffer::Length(buf);
    return node::Buffer::Data(buf);
}

/**
 * Get a Buffer out of args[1], converted to a freshly-allocated (char
 * *). Returns a non-null pointer on success. On failure, schedules an
 * exception and returns NULL.
 */
static char *getArg1BufferAsString(const Arguments& args) {
    if (!isBuffer(args, 1)) { return NULL; }

    Local<Object> buf = args[1]->ToObject();
    char *data = node::Buffer::Data(buf);
    ssize_t length = node::Buffer::Length(buf);
    char *result = (char *) malloc(length + 1);

    if (result == NULL) {
        scheduleAllocException();
        return NULL;
    }

    memcpy(result, data, length);
    result[length] = '\0';
    return result;
}

/**
 * Get a string out of args[] at the given index, converted to a
 * freshly-allocated (char *). Returns a non-null pointer on
 * success. On failure, schedules an exception and returns NULL.
 */
static char *getArgString(const Arguments& args, int index) {
    if (!isString(args, index)) { return NULL; }

    Local<String> str = args[index]->ToString();
    int length = str->Utf8Length();
    char *result = (char *) malloc(length + 1);

    if (result == NULL) {
        scheduleAllocException();
        return NULL;
    }

    result[length] = 'x'; // Set up a small sanity check (see below).
    str->WriteUtf8(result, length + 1);

    if (result[length] != '\0') {
        const char *message = "String conversion failed.";
        ThrowException(Exception::Error(String::New(message)));
        free(result);
        return NULL;
    }

    return result;
}

/**
 * Get an int out of args at the given index, storing it into the
 * given pointer. Returns true on success. Schedules an exception and
 * returns false on failure.
 */
static bool getArgInt(const Arguments& args, int index, int *resultPtr) {
    if (!hasArgument(args, index)) { return false; }

    Local<Value> arg = args[index];

    if (! arg->IsInt32()) {
        char *message = NULL;
        asprintf(&message, "Expected a 32-bit integer in args[%d].", index);
        ThrowException(Exception::TypeError(String::New(message)));
        free(message);
        return false;
    }

    *resultPtr = (int) arg->ToInt32()->Value();
    return true;
}

/**
 * Generate a key, using one of the two possibly-available functions.
 * This prefers the newer function, if available.
 */
static RSA *generateKey(int num, unsigned long e) {
#if OPENSSL_VERSION_NUMBER < 0x009080001
    return RSA_generate_key(num, e, NULL, NULL);
#else
    BIGNUM *eBig = BN_new();

    if (eBig == NULL) {
        return NULL;
    }

    if (!BN_set_word(eBig, e)) {
        BN_free(eBig);
        return NULL;
    }

    RSA *result = RSA_new();

    if (result == NULL) {
        BN_free(eBig);
        return NULL;
    }

    if (RSA_generate_key_ex(result, num, eBig, NULL) < 0) {
        RSA_free(result);
        result = NULL;
    }

    BN_free(eBig);
    return result;
#endif
}


/*
 * Utility function implementation
 */

/**
 * Call the OpenSSL function OBJ_txt2nid() on the given string.
 * This returns a number representing the text that, as far as I
 * (danfuzz) know, is not necessarily stable across versions of
 * OpenSSL, so it's only safe to use transiently.
 */
Handle<Value> TextToNid(const Arguments& args) {
    HandleScope scope;

    char *name = getArgString(args, 0);
    if (name == NULL) { return Undefined(); }        

    int nid = OBJ_txt2nid(name);
    free(name);

    if (nid == NID_undef) { 
        scheduleSslException();
        return Undefined();
    }

    return scope.Close(Integer::New(nid));
}


/*
 * RsaWrap implementation
 */

/**
 * Initialize the bindings for this class.
 */
void RsaWrap::InitClass(Handle<Object> target) {
    Local<String> className = String::NewSymbol("RsaWrap");

    // Basic instance setup
    Local<FunctionTemplate> tpl = FunctionTemplate::New(New);

    tpl->SetClassName(className);
    tpl->InstanceTemplate()->SetInternalFieldCount(1); // req'd by ObjectWrap

    // Prototype method bindings
    Local<ObjectTemplate> proto = tpl->PrototypeTemplate();

    BIND(proto, generatePrivateKey, GeneratePrivateKey);
    BIND(proto, getExponent,        GetExponent);
    BIND(proto, getModulus,         GetModulus);
    BIND(proto, getPrivateKeyPem,   GetPrivateKeyPem);
    BIND(proto, getPublicKeyPem,    GetPublicKeyPem);
    BIND(proto, privateDecrypt,     PrivateDecrypt);
    BIND(proto, privateEncrypt,     PrivateEncrypt);
    BIND(proto, publicDecrypt,      PublicDecrypt);
    BIND(proto, publicEncrypt,      PublicEncrypt);
    BIND(proto, setPrivateKeyPem,   SetPrivateKeyPem);
    BIND(proto, setPublicKeyPem,    SetPublicKeyPem);
    BIND(proto, sign,               Sign);
    BIND(proto, verify,             Verify);

    // Store the constructor in the target bindings.
    target->Set(className, Persistent<Function>::New(tpl->GetFunction()));
}

/**
 * Straightforward constructor. Nothing much to initialize, other than
 * to ensure that our one instance variable is sanely NULLed.
 */
RsaWrap::RsaWrap() {
    rsa = NULL;
}

/**
 * Destructor, which is called automatically via the ObjectWrap mechanism
 * when the corresponding high-level object gets gc'ed.
 */
RsaWrap::~RsaWrap() {
    if (rsa != NULL) {
        RSA_free(rsa);
    }
}

/**
 * Get an (RsaWrap *) out of the given arguments, expecting the
 * underlying (RSA *) to be non-null and more specifically a private
 * key. Returns a non-null pointer on success. On failure, schedules
 * an exception and returns null.
 */
RsaWrap *RsaWrap::unwrapExpectPrivateKey(const Arguments& args) {
    RsaWrap *obj = unwrapExpectSet(args);

    // The "d" field should always be set on a private key and never
    // set on a public key.
    if ((obj == NULL) || (obj->rsa->d != NULL)) {
        return obj;
    }

    Local<Value> exception =
        Exception::Error(String::New("Expected a private key."));
    ThrowException(exception);
    return NULL;
}

/**
 * Get an (RsaWrap *) out of the given arguments, expecting the underlying
 * (RSA *) to be non-null. Returns a non-null pointer on success. On failure,
 * schedules an exception and returns null.
 */
RsaWrap *RsaWrap::unwrapExpectSet(const Arguments& args) {
    RsaWrap *obj = ObjectWrap::Unwrap<RsaWrap>(args.Holder());

    if (obj->rsa != NULL) {
        return obj;
    }

    Local<Value> exception = Exception::Error(String::New("Key not yet set."));
    ThrowException(exception);
    return NULL;
}

/**
 * Get an (RsaWrap *) out of the given arguments, expecting the underlying
 * (RSA *) to be null. Returns a non-null pointer on success. On failure,
 * schedules an exception and returns null.
 */
RsaWrap *RsaWrap::unwrapExpectUnset(const Arguments& args) {
    RsaWrap *obj = ObjectWrap::Unwrap<RsaWrap>(args.Holder());

    if (obj->rsa == NULL) {
        return obj;
    }

    Local<Value> exception = Exception::Error(String::New("Key already set."));
    ThrowException(exception);
    return NULL;
}

/**
 * Construct an empty instance.
 */
Handle<Value> RsaWrap::New(const Arguments& args) {
    RsaWrap *obj = new RsaWrap();
    obj->Wrap(args.This());

    return args.This();
}

/**
 * Set the underlying RSA struct to a newly-generated key pair.
 */
Handle<Value> RsaWrap::GeneratePrivateKey(const Arguments& args) {
    HandleScope scope;

    RsaWrap *obj = unwrapExpectUnset(args);
    if (obj == NULL) { return Undefined(); }

    int modulusBits = 0;
    int exponent = 0;

    if (! (getArgInt(args, 0, &modulusBits) &&
           getArgInt(args, 1, &exponent))) {
        return Undefined();
    }

    // Sanity-check the arguments, since (as of this writing) OpenSSL
    // either doesn't check, or at least doesn't consistently check:
    //
    // * The modulus bit count must be >= 512. Really, it just has to
    //   be a positive integer, but anything less than 512 is a
    //   horrendously bad idea.
    //
    // * The exponend must be positive and odd.

    if (modulusBits < 512) {
        Local<String> message =
            String::New("Expected modulus bit count >= 512.");
        ThrowException(Exception::TypeError(message));
        return Undefined();
    }

    if (exponent <= 0) {
        Local<String> message = String::New("Expected positive exponent.");
        ThrowException(Exception::TypeError(message));
        return Undefined();
    }

    if ((exponent & 1) == 0) {
        Local<String> message = String::New("Expected odd exponent.");
        ThrowException(Exception::TypeError(message));
        return Undefined();
    }

    obj->rsa = generateKey(modulusBits, (unsigned long) exponent);

    if (obj->rsa == NULL) {
        scheduleSslException();
    }

    return Undefined();
}

/**
 * Get the public exponent of the underlying RSA object. The return
 * value is a Buffer containing the unsigned number in big-endian
 * order.
 */
Handle<Value> RsaWrap::GetExponent(const Arguments& args) {
    HandleScope scope;

    RsaWrap *obj = unwrapExpectSet(args);
    if (obj == NULL) { return Undefined(); }

    return bignumToBuffer(obj->rsa->e);
}

/**
 * Get the public modulus of the underlying RSA object. The return
 * value is a Buffer containing the unsigned number in big-endian
 * order.
 */
Handle<Value> RsaWrap::GetModulus(const Arguments& args) {
    HandleScope scope;

    RsaWrap *obj = unwrapExpectSet(args);
    if (obj == NULL) { return Undefined(); }

    return bignumToBuffer(obj->rsa->n);
}

/**
 * Get the private key of the underlying RSA object as a file
 * in PEM format. The return value is a Buffer containing the
 * file contents (in ASCII / UTF8). Note: This does not do any
 * encryption of the results.
 */
Handle<Value> RsaWrap::GetPrivateKeyPem(const Arguments& args) {
    HandleScope scope;

    RsaWrap *obj = unwrapExpectPrivateKey(args);
    if (obj == NULL) { return Undefined(); }

    BIO *bio = BIO_new(BIO_s_mem());
    if (bio == NULL) {
        scheduleSslException();
        return Undefined();
    }

    if (!PEM_write_bio_RSAPrivateKey(bio, obj->rsa,
                                     NULL, NULL, 0, NULL, NULL)) {
        scheduleSslException();
        BIO_vfree(bio);
        return Undefined();
    }

    return bioToBuffer(bio);
}

/**
 * Get the public key of the underlying RSA object as a file
 * in PEM format. The return value is a Buffer containing the
 * file contents (in ASCII / UTF8).
 */
Handle<Value> RsaWrap::GetPublicKeyPem(const Arguments& args) {
    HandleScope scope;

    RsaWrap *obj = unwrapExpectSet(args);
    if (obj == NULL) { return Undefined(); }

    BIO *bio = BIO_new(BIO_s_mem());
    if (bio == NULL) {
        scheduleSslException();
        return Undefined();
    }

    if (!PEM_write_bio_RSA_PUBKEY(bio, obj->rsa)) {
        scheduleSslException();
        BIO_vfree(bio);
        return Undefined();
    }

    return bioToBuffer(bio);
}

/**
 * Perform decryption on the given buffer using the RSA key, which
 * must be a private key. This always uses the padding mode
 * RSA_PKCS1_OAEP_PADDING.
 */
Handle<Value> RsaWrap::PrivateDecrypt(const Arguments& args) {
    HandleScope scope;

    RsaWrap *obj = unwrapExpectPrivateKey(args);
    if (obj == NULL) { return Undefined(); }

    int length;
    void *data = getArgDataAndLength(args, 0, &length);
    if (data == NULL) { return Undefined(); }

    int rsaLength = RSA_size(obj->rsa);
    VAR_ARRAY(unsigned char, buf, rsaLength);

    int padding;
    if (!getArgInt(args, 1, &padding)) { return Undefined(); }

    int bufLength = RSA_private_decrypt(length, (unsigned char *) data,
                                        buf, obj->rsa, padding);

    if (bufLength < 0) {
        scheduleSslException();
        return Undefined();
    }

    node::Buffer *result = node::Buffer::New(bufLength);

    if (result == NULL) {
        scheduleAllocException();
        return Undefined();
    }

    memcpy(node::Buffer::Data(result), buf, bufLength);
    return result->handle_;
}

/**
 * Perform encryption on the given buffer using the RSA key, which
 * must be private. This always uses the padding mode
 * RSA_PKCS1_PADDING.
 */
Handle<Value> RsaWrap::PrivateEncrypt(const Arguments& args) {
    HandleScope scope;

    RsaWrap *obj = unwrapExpectPrivateKey(args);
    if (obj == NULL) { return Undefined(); }

    int length;
    void *data = getArgDataAndLength(args, 0, &length);
    if (data == NULL) { return Undefined(); }

    int rsaLength = RSA_size(obj->rsa);
    node::Buffer *result = node::Buffer::New(rsaLength);

    if (result == NULL) {
        scheduleAllocException();
        return Undefined();
    }

    int ret = RSA_private_encrypt(length, (unsigned char *) data, 
                                  (unsigned char *) node::Buffer::Data(result),
                                  obj->rsa, RSA_PKCS1_PADDING);

    if (ret < 0) {
        // TODO: Will this leak the result buffer? Is it going to be gc'ed?
        scheduleSslException();
        return Undefined();
    }

    return result->handle_;
}

/**
 * Perform decryption on the given buffer using the (public aspect of
 * the) RSA key. This always uses the padding mode RSA_PKCS1_PADDING.
 */
Handle<Value> RsaWrap::PublicDecrypt(const Arguments& args) {
    HandleScope scope;

    RsaWrap *obj = unwrapExpectSet(args);
    if (obj == NULL) { return Undefined(); }

    int length;
    void *data = getArgDataAndLength(args, 0, &length);
    if (data == NULL) { return Undefined(); }

    int rsaLength = RSA_size(obj->rsa);
    VAR_ARRAY(unsigned char, buf, rsaLength);

    int bufLength = RSA_public_decrypt(length, (unsigned char *) data,
                                       buf, obj->rsa, RSA_PKCS1_PADDING);

    if (bufLength < 0) {
        scheduleSslException();
        return Undefined();
    }

    node::Buffer *result = node::Buffer::New(bufLength);

    if (result == NULL) {
        scheduleAllocException();
        return Undefined();
    }

    memcpy(node::Buffer::Data(result), buf, bufLength);
    return result->handle_;
}

/**
 * Perform encryption on the given buffer using the public (aspect of the)
 * RSA key. This always uses the padding mode RSA_PKCS1_OAEP_PADDING.
 */
Handle<Value> RsaWrap::PublicEncrypt(const Arguments& args) {
    HandleScope scope;

    RsaWrap *obj = unwrapExpectSet(args);
    if (obj == NULL) { return Undefined(); }

    int length;
    void *data = getArgDataAndLength(args, 0, &length);
    if (data == NULL) { return Undefined(); }

    int rsaLength = RSA_size(obj->rsa);
    node::Buffer *result = node::Buffer::New(rsaLength);

    if (result == NULL) {
        scheduleAllocException();
        return Undefined();
    }

    int padding;
    if (!getArgInt(args, 1, &padding)) { return Undefined(); }

    int ret = RSA_public_encrypt(length, (unsigned char *) data, 
                                 (unsigned char *) node::Buffer::Data(result),
                                 obj->rsa, padding);

    if (ret < 0) {
        // TODO: Will this leak the result buffer? Is it going to be gc'ed?
        scheduleSslException();
        return Undefined();
    }

    return result->handle_;
}

/**
 * Sets the underlying RSA object to correspond to the given
 * private key (a Buffer of PEM format data). This throws an
 * exception if the underlying RSA had previously been set.
 */
Handle<Value> RsaWrap::SetPrivateKeyPem(const Arguments& args) {
    HandleScope scope;
    bool ok = true;

    RsaWrap *obj = unwrapExpectUnset(args);
    ok &= (obj != NULL);

    BIO *bio = NULL;
    if (ok) {
        bio = getArg0Bio(args);
        ok &= (bio != NULL);
    }

    char *password = NULL;
    if (ok && (args.Length() >= 2)) {
        password = getArg1BufferAsString(args);
        ok &= (password != NULL);
    }

    if (ok) {
        obj->rsa = PEM_read_bio_RSAPrivateKey(bio, NULL, 0, password);
        if (obj->rsa == NULL) { scheduleSslException(); }
    }

    if (bio != NULL) { BIO_vfree(bio); }
    free(password);
    return Undefined();
}

/**
 * Sets the underlying RSA object to correspond to the given
 * public key (a Buffer of PEM format data). This throws an
 * exception if the underlying RSA had previously been set.
 */
Handle<Value> RsaWrap::SetPublicKeyPem(const Arguments& args) {
    HandleScope scope;

    RsaWrap *obj = unwrapExpectUnset(args);
    if (obj == NULL) { return Undefined(); }

    BIO *bio = getArg0Bio(args);
    if (bio == NULL) { return Undefined(); }

    obj->rsa = PEM_read_bio_RSA_PUBKEY(bio, NULL, NULL, NULL);

    if (obj->rsa == NULL) { scheduleSslException(); }

    BIO_vfree(bio);
    return Undefined();
}

/**
 * Sign the given hash data. First argument indicates what kind of hash
 * was performed. Returns a Buffer object.
 */
Handle<Value> RsaWrap::Sign(const Arguments& args) {
    HandleScope scope;

    RsaWrap *obj = unwrapExpectPrivateKey(args);
    if (obj == NULL) { return Undefined(); }

    int nid;
    if (!getArgInt(args, 0, &nid)) { return Undefined(); }

    int dataLength;
    void *data = getArgDataAndLength(args, 1, &dataLength);
    if (data == NULL) { return Undefined(); }

    unsigned int rsaSize = (unsigned int) RSA_size(obj->rsa);
    unsigned int sigLength = rsaSize;
    node::Buffer *result = node::Buffer::New(sigLength);

    int ret = RSA_sign(nid, (unsigned char*) data, dataLength, 
                       (unsigned char *) node::Buffer::Data(result),
                       &sigLength, obj->rsa);

    if (ret == 0) { 
        // TODO: Will this leak the result buffer? Is it going to be gc'ed?
        scheduleSslException();
        return Undefined();
    }

    if (rsaSize != sigLength) {
        // Sanity check. Shouldn't ever happen in practice.
        ThrowException(Exception::Error(String::New("Shouldn't happen.")));
    }

    return result->handle_;
}

/**
 * Verify the signature on the given hash data. First argument indicates
 * what kind of hash was performed. Throws an exception if the signature
 * did not verify.
 */
Handle<Value> RsaWrap::Verify(const Arguments& args) {
    HandleScope scope;

    RsaWrap *obj = unwrapExpectSet(args);
    if (obj == NULL) { return Undefined(); }

    int nid;
    if (!getArgInt(args, 0, &nid)) { return Undefined(); }

    int dataLength;
    void *data = getArgDataAndLength(args, 1, &dataLength);
    if (data == NULL) { return Undefined(); }

    int sigLength;
    void *sig = getArgDataAndLength(args, 2, &sigLength);
    if (sig == NULL) { return Undefined(); }

    int ret = RSA_verify(nid, (unsigned char *) data, dataLength,
                         (unsigned char *) sig, sigLength, obj->rsa);
    if (ret == 0) {
        // Something went wrong; investigate!
        unsigned long err = ERR_peek_error();
        int lib = ERR_GET_LIB(err);
        int reason = ERR_GET_REASON(err);
        if ((lib == ERR_LIB_RSA) && (reason == RSA_R_BAD_SIGNATURE)) {
            // This just means that the signature didn't match
            // (as opposed to, say, a more dire failure in the library
            // warranting an exception throw).
            ERR_get_error(); // Consume the error (get it off the err stack).
            return False();
        }
        scheduleSslException();
    }

    return True();
}
