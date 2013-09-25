// Copyright 2012 The Obvious Corporation.

#ifndef URSA_NATIVE_H
#define URSA_NATIVE_H

#define BUILDING_NODE_EXTENSION
#include <node.h>
#include <v8.h>

#include <openssl/rsa.h>

class RsaWrap : node::ObjectWrap {
  public:
    static void InitClass(v8::Handle<v8::Object> target);

  protected:
    RsaWrap();
    ~RsaWrap();

    static v8::Handle<v8::Value> New(const v8::Arguments& args);
    static v8::Handle<v8::Value> GeneratePrivateKey(const v8::Arguments& args);
    static v8::Handle<v8::Value> GetExponent(const v8::Arguments& args);
    static v8::Handle<v8::Value> GetModulus(const v8::Arguments& args);
    static v8::Handle<v8::Value> GetPrivateKeyPem(const v8::Arguments& args);
    static v8::Handle<v8::Value> GetPublicKeyPem(const v8::Arguments& args);
    static v8::Handle<v8::Value> PrivateDecrypt(const v8::Arguments& args);
    static v8::Handle<v8::Value> PrivateEncrypt(const v8::Arguments& args);
    static v8::Handle<v8::Value> PublicDecrypt(const v8::Arguments& args);
    static v8::Handle<v8::Value> PublicEncrypt(const v8::Arguments& args);
    static v8::Handle<v8::Value> SetPrivateKeyPem(const v8::Arguments& args);
    static v8::Handle<v8::Value> SetPublicKeyPem(const v8::Arguments& args);
    static v8::Handle<v8::Value> Sign(const v8::Arguments& args);
    static v8::Handle<v8::Value> Verify(const v8::Arguments& args);


  private:
    static RsaWrap *unwrapExpectPrivateKey(const v8::Arguments& args);
    static RsaWrap *unwrapExpectSet(const v8::Arguments& args);
    static RsaWrap *unwrapExpectUnset(const v8::Arguments& args);

    RSA *rsa;
};

v8::Handle<v8::Value> TextToNid(const v8::Arguments& args);

#endif // def URSA_NATIVE_H
