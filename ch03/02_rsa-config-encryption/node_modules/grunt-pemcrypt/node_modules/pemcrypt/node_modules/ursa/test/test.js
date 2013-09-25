// Copyright 2012 The Obvious Corporation.

/*
 * Tests of ursa
 */

/*
 * Modules used
 */

"use strict";

var assert = require("assert");

var fixture = require("./fixture");
var ursa    = fixture.ursa;

/**
 * Asserts that two strings are equal, ignoring Windows newline differences
 */
function assertStringEqual(actual, expected, message) {
    assert.equal(actual.replace(/\r\n/g, '\n'), expected.replace(/\r\n/g, '\n'), message);
}

/*
 * Helper functions
 */

function test_getExponent(key) {
    var buf = key.getExponent();
    assert.equal(buf.toString(fixture.HEX), fixture.EXPONENT_HEX);

    var result = key.getExponent(fixture.HEX);
    assert.equal(result, fixture.EXPONENT_HEX);

    result = key.getExponent(fixture.BASE64);
    assert.equal(result, buf.toString(fixture.BASE64));

    result = key.getExponent(fixture.BINARY);
    assert.equal(result, buf.toString(fixture.BINARY));

    result = key.getExponent(fixture.UTF8);
    assert.equal(result, buf.toString(fixture.UTF8));
}

function test_getModulus(key) {
    var buf = key.getModulus();
    assert.equal(buf.toString(fixture.HEX), fixture.MODULUS_HEX);

    var result = key.getModulus(fixture.HEX);
    assert.equal(result, fixture.MODULUS_HEX);

    result = key.getModulus(fixture.BASE64);
    assert.equal(result, buf.toString(fixture.BASE64));

    result = key.getModulus(fixture.BINARY);
    assert.equal(result, buf.toString(fixture.BINARY));

    result = key.getModulus(fixture.UTF8);
    assert.equal(result, buf.toString(fixture.UTF8));
}

function test_toPublicPem(key) {
    var keyString = fixture.PUBLIC_KEY.toString(fixture.UTF8);
    var result = key.toPublicPem().toString(fixture.UTF8);
    assertStringEqual(result, keyString);

    result = key.toPublicPem(fixture.UTF8);
    assertStringEqual(result, keyString);
}

function test_toPublicSsh(key) {
    var keyString = fixture.SSH_PUBLIC_KEY.toString(fixture.BASE64);
    var result = key.toPublicSsh().toString(fixture.BASE64);
    assert.equal(result, keyString);

    result = key.toPublicSsh(fixture.BASE64);
    assert.equal(result, keyString);
}

function test_toPublicSshFingerprint(key) {
    var result = key.toPublicSshFingerprint().toString(fixture.HEX);
    assert.equal(result, fixture.SSH_PUBLIC_KEY_FINGERPRINT_HEX);

    result = key.toPublicSshFingerprint(fixture.HEX);
    assert.equal(result, fixture.SSH_PUBLIC_KEY_FINGERPRINT_HEX);
}

function test_encrypt(key) {
    // The sanest way to test this is to do a round trip.
    var privKey = ursa.createPrivateKey(fixture.PRIVATE_KEY)
    var encoded = key.encrypt(new Buffer(fixture.PLAINTEXT, fixture.UTF8));
    var decoded = privKey.decrypt(encoded, undefined, fixture.UTF8);
    assert.equal(decoded, fixture.PLAINTEXT);

    encoded = key.encrypt(fixture.PLAINTEXT, fixture.UTF8, fixture.BASE64);
    decoded = privKey.decrypt(encoded, fixture.BASE64, fixture.UTF8);
    assert.equal(decoded, fixture.PLAINTEXT);

    encoded = key.encrypt(fixture.PLAINTEXT, undefined, fixture.HEX);
    decoded = privKey.decrypt(encoded, fixture.HEX, fixture.UTF8);
    assert.equal(decoded, fixture.PLAINTEXT);
}

function test_publicDecrypt(key) {
    var encoded = new Buffer(fixture.PUBLIC_CIPHERTEXT_HEX, fixture.HEX);
    var decoded = key.publicDecrypt(encoded).toString(fixture.UTF8);
    assert.equal(decoded, fixture.PLAINTEXT);

    decoded = key.publicDecrypt(fixture.PUBLIC_CIPHERTEXT_HEX, fixture.HEX,
                                fixture.UTF8);
    assert.equal(decoded, fixture.PLAINTEXT);
}

function test_verify(key) {
    assert.equal(key.verify(fixture.SHA256, fixture.PLAINTEXT_SHA256,
                            fixture.PLAINTEXT_SHA256_SIGNATURE,
                            fixture.HEX), true);

    var hash = new Buffer(fixture.PLAINTEXT_SHA256, fixture.HEX);
    var sig = new Buffer(fixture.PLAINTEXT_SHA256_SIGNATURE, fixture.HEX);
    assert.equal(key.verify(fixture.SHA256, hash, sig), true);
}

function test_hashAndVerify(key) {
    assert.equal(key.hashAndVerify(fixture.SHA256,
                                   new Buffer(fixture.PLAINTEXT, fixture.UTF8),
                                   fixture.PLAINTEXT_SHA256_SIGNATURE,
                                   fixture.HEX),
                 true);
}

function testPublicKeyMethods(key) {
    test_getExponent(key);
    test_getModulus(key);
    test_toPublicPem(key);
    test_toPublicSsh(key);
    test_toPublicSshFingerprint(key);
    test_encrypt(key);
    test_publicDecrypt(key);
    test_verify(key);
    test_hashAndVerify(key);
}

function test_toPrivatePem(key) {
    var keyString = fixture.PRIVATE_KEY.toString(fixture.UTF8);
    var result = key.toPrivatePem().toString(fixture.UTF8);
    assertStringEqual(result, keyString);

    result = key.toPrivatePem(fixture.UTF8);
    assertStringEqual(result, keyString);
}

function test_decrypt(key) {
    var encoded = new Buffer(fixture.PRIVATE_CIPHERTEXT_HEX, fixture.HEX);
    var decoded = key.decrypt(encoded).toString(fixture.UTF8);
    assert.equal(decoded, fixture.PLAINTEXT);

    decoded = key.decrypt(fixture.PRIVATE_CIPHERTEXT_HEX, fixture.HEX,
                          fixture.UTF8);
    assert.equal(decoded, fixture.PLAINTEXT);
}

function test_privateEncrypt(key) {
    var encoded = key.privateEncrypt(
        new Buffer(fixture.PLAINTEXT, fixture.UTF8)).toString(fixture.HEX);
    assert.equal(encoded, fixture.PUBLIC_CIPHERTEXT_HEX);

    encoded = key.privateEncrypt(fixture.PLAINTEXT, fixture.UTF8, fixture.HEX);
    assert.equal(encoded, fixture.PUBLIC_CIPHERTEXT_HEX);

    encoded = key.privateEncrypt(fixture.PLAINTEXT, undefined, fixture.HEX);
    assert.equal(encoded, fixture.PUBLIC_CIPHERTEXT_HEX);
}

function test_sign(key) {
    var sig = key.sign(fixture.SHA256,
                       fixture.PLAINTEXT_SHA256, fixture.HEX,
                       fixture.BASE64);
    sig = new Buffer(sig, fixture.BASE64);
    assert.equal(sig.toString(fixture.HEX), fixture.PLAINTEXT_SHA256_SIGNATURE);

    var buf = new Buffer(fixture.PLAINTEXT_SHA256, fixture.HEX);
    sig = key.sign(fixture.SHA256, buf, undefined, fixture.HEX);
    assert.equal(sig, fixture.PLAINTEXT_SHA256_SIGNATURE);
}

function test_hashAndSign(key) {
    var sig = key.hashAndSign(fixture.SHA256, fixture.PLAINTEXT,
                              fixture.UTF8, fixture.HEX);
    assert.equal(sig, fixture.PLAINTEXT_SHA256_SIGNATURE);
}

function testPrivateKeyMethods(key) {
    test_toPrivatePem(key);
    test_decrypt(key);
    test_privateEncrypt(key);
    test_hashAndSign(key);
    test_sign(key);
}


/*
 * Test functions
 */

function testBasics() {
    ursa.createPublicKey(fixture.PUBLIC_KEY);
    ursa.createPrivateKey(fixture.PRIVATE_KEY);
    ursa.createPrivateKey(fixture.PASS_PRIVATE_KEY, fixture.PASSWORD);
    ursa.generatePrivateKey(512);

    ursa.createPublicKey(fixture.PUBLIC_KEY.toString(fixture.UTF8));
    ursa.createPrivateKey(fixture.PRIVATE_KEY.toString(fixture.BASE64),
                          undefined, fixture.BASE64);
}

function testTypes() {
    var pub = ursa.createPublicKey(fixture.PUBLIC_KEY);
    var priv = ursa.createPrivateKey(fixture.PRIVATE_KEY);
    var msg;
    
    msg = "Problem with isKey()";
    assert.equal(ursa.isKey(pub),       true,  msg);
    assert.equal(ursa.isKey(priv),      true,  msg);
    assert.equal(ursa.isKey(undefined), false, msg);
    assert.equal(ursa.isKey("x"),       false, msg);

    msg = "Problem with isPublicKey()";
    assert.equal(ursa.isPublicKey(pub),       true,  msg);
    assert.equal(ursa.isPublicKey(priv),      false, msg);
    assert.equal(ursa.isPublicKey(undefined), false, msg);
    assert.equal(ursa.isPublicKey("x"),       false, msg);

    msg = "Problem with isPrivateKey()";
    assert.equal(ursa.isPrivateKey(pub),       false, msg);
    assert.equal(ursa.isPrivateKey(priv),      true,  msg);
    assert.equal(ursa.isPrivateKey(undefined), false, msg);
    assert.equal(ursa.isPrivateKey("x"),       false, msg);

    assert.doesNotThrow(function () { ursa.assertKey(pub); });
    assert.doesNotThrow(function () { ursa.assertKey(priv); });
    assert.throws(function () { ursa.assertKey(undefined); });
    assert.throws(function () { ursa.assertKey("x"); });

    assert.doesNotThrow(function () { ursa.assertPublicKey(pub); });
    assert.throws(function () { ursa.assertPublicKey(priv); });
    assert.throws(function () { ursa.assertPublicKey(undefined); });
    assert.throws(function () { ursa.assertPublicKey("x"); });

    assert.throws(function () { ursa.assertPrivateKey(pub); });
    assert.doesNotThrow(function () { ursa.assertPrivateKey(priv); });
    assert.throws(function () { ursa.assertPrivateKey(undefined); });
    assert.throws(function () { ursa.assertPrivateKey("x"); });
}

function test_createKey() {
    var priv = ursa.createKey(fixture.PRIVATE_KEY);
    assert(ursa.isPrivateKey(priv), true);

    var pub = ursa.createKey(fixture.PUBLIC_KEY);
    assert(ursa.isPublicKey(pub), true);

    function f1() {
        ursa.createKey("yo there");
    }
    assert.throws(f1, /Not a key\./);
}

function test_fail_createPublicKey() {
    // This is mostly tested at the native level. This just tests the
    // extra failures added at the high level.
    function f1() {
        ursa.createPublicKey(fixture.PRIVATE_KEY);
    }
    assert.throws(f1, /Not a public key\./);
}

function test_fail_createPrivateKey() {
    // This is mostly tested at the native level. This just tests the
    // extra failures added at the high level.
    function f1() {
        ursa.createPrivateKey(fixture.PUBLIC_KEY);
    }
    assert.throws(f1, /Not a private key\./);
}

function test_coerceKey() {
    var priv = ursa.coerceKey(fixture.PRIVATE_KEY);
    assert(ursa.isPrivateKey(priv), true);

    priv = ursa.coerceKey(fixture.PRIVATE_KEY.toString());
    assert(ursa.isPrivateKey(priv), true);

    var pub = ursa.coerceKey(fixture.PUBLIC_KEY);
    assert(ursa.isPublicKey(pub), true);

    pub = ursa.coerceKey(fixture.PUBLIC_KEY.toString());
    assert(ursa.isPublicKey(pub), true);

    assert.equal(ursa.coerceKey(priv), priv);
    assert.equal(ursa.coerceKey(pub), pub);
}

function test_coercePrivateKey() {
    var priv = ursa.coercePrivateKey(fixture.PRIVATE_KEY);
    assert(ursa.isPrivateKey(priv), true);

    priv = ursa.coercePrivateKey(fixture.PRIVATE_KEY.toString());
    assert(ursa.isPrivateKey(priv), true);

    assert.equal(ursa.coercePrivateKey(priv), priv);
}

function test_coercePublicKey() {
    var pub = ursa.coercePublicKey(fixture.PUBLIC_KEY);
    assert(ursa.isPublicKey(pub), true);

    pub = ursa.coercePublicKey(fixture.PUBLIC_KEY.toString());
    assert(ursa.isPublicKey(pub), true);

    assert.equal(ursa.coercePublicKey(pub), pub);
}

function test_fail_coerceKey() {
    function f1() {
        ursa.coerceKey("foo");
    }
    assert.throws(f1, /Not a key/);

    function f2() {
        ursa.coerceKey(new Buffer(200));
    }
    assert.throws(f2, /Not a key/);

    function f3() {
        ursa.coerceKey([]);
    }
    assert.throws(f3, /Not a key/);
}

function test_fail_coercePrivateKey() {
    function f1() {
        ursa.coercePrivateKey("foo");
    }
    assert.throws(f1, /Not a private key/);

    function f2() {
        ursa.coercePrivateKey(new Buffer(200));
    }
    assert.throws(f2, /Not a private key/);

    function f3() {
        ursa.coercePrivateKey([]);
    }
    assert.throws(f3, /Not a private key/);

    function f4() {
        ursa.coercePrivateKey(fixture.PUBLIC_KEY);
    }
    assert.throws(f4, /Not a private key/);

    function f5() {
        ursa.coercePrivateKey(fixture.PUBLIC_KEY.toString());
    }
    assert.throws(f5, /Not a private key/);
}

function test_fail_coercePublicKey() {
    function f1() {
        ursa.coercePublicKey("foo");
    }
    assert.throws(f1, /Not a public key/);

    function f2() {
        ursa.coercePublicKey(new Buffer(200));
    }
    assert.throws(f2, /Not a public key/);

    function f3() {
        ursa.coercePublicKey([]);
    }
    assert.throws(f3, /Not a public key/);

    function f4() {
        ursa.coercePublicKey(fixture.PRIVATE_KEY);
    }
    assert.throws(f4, /Not a public key/);

    function f5() {
        ursa.coercePublicKey(fixture.PRIVATE_KEY.toString());
    }
    assert.throws(f5, /Not a public key/);
}

function testPublicKey() {
    var key = ursa.createPublicKey(fixture.PUBLIC_KEY);
    testPublicKeyMethods(key);
}

function testPrivateKey() {
    var key = ursa.createPrivateKey(fixture.PRIVATE_KEY);
    testPublicKeyMethods(key);
    testPrivateKeyMethods(key);
}

function testGeneratedKey() {
    // Just do a round trip. If that works, then it's safe to believe
    // the native tests (which are more comprehensive).
    var key = ursa.generatePrivateKey();
    var encoded = key.encrypt(fixture.PLAINTEXT, fixture.UTF8);
    var decoded = key.decrypt(encoded, undefined, fixture.UTF8);
    assert.equal(decoded, fixture.PLAINTEXT);
}

function test_sshFingerprint() {
    var key = fixture.SSH_PUBLIC_KEY;
    var finger = ursa.sshFingerprint(fixture.SSH_PUBLIC_KEY);
    assert.equal(finger.toString(fixture.HEX),
                 fixture.SSH_PUBLIC_KEY_FINGERPRINT_HEX);

    finger = ursa.sshFingerprint(fixture.SSH_PUBLIC_KEY, undefined,
                                 fixture.HEX);
    assert.equal(finger, fixture.SSH_PUBLIC_KEY_FINGERPRINT_HEX);

    finger = ursa.sshFingerprint(
        fixture.SSH_PUBLIC_KEY.toString(fixture.BASE64), 
        fixture.BASE64, fixture.HEX);
    assert.equal(finger, fixture.SSH_PUBLIC_KEY_FINGERPRINT_HEX);
}

function test_equalKeys() {
    var pub = ursa.createPublicKey(fixture.PUBLIC_KEY);
    var priv = ursa.createPrivateKey(fixture.PRIVATE_KEY);
    var samePub = ursa.createPublicKey(fixture.PUBLIC_KEY);
    var samePriv = ursa.createPrivateKey(fixture.PRIVATE_KEY);
    var diffPub = ursa.createPublicKey(fixture.PUBLIC_KEY_2);
    var diffPriv = ursa.createPrivateKey(fixture.PRIVATE_KEY_2);

    assert.equal(ursa.equalKeys("1", "2"), false);
    assert.equal(ursa.equalKeys(123, 123), false);
    assert.equal(ursa.equalKeys(pub, null), false);
    assert.equal(ursa.equalKeys(true, pub), false);

    assert.equal(ursa.equalKeys(pub, pub), true);
    assert.equal(ursa.equalKeys(priv, priv), true);
    assert.equal(ursa.equalKeys(pub, priv), false);
    assert.equal(ursa.equalKeys(priv, pub), false);

    assert.equal(ursa.equalKeys(pub, samePub), true);
    assert.equal(ursa.equalKeys(priv, samePriv), true);

    assert.equal(ursa.equalKeys(pub, diffPub), false);
    assert.equal(ursa.equalKeys(priv, diffPriv), false);
}

function test_matchingPublicKeys() {
    var pub = ursa.createPublicKey(fixture.PUBLIC_KEY);
    var priv = ursa.createPrivateKey(fixture.PRIVATE_KEY);
    var samePub = ursa.createPublicKey(fixture.PUBLIC_KEY);
    var samePriv = ursa.createPrivateKey(fixture.PRIVATE_KEY);
    var diffPub = ursa.createPublicKey(fixture.PUBLIC_KEY_2);
    var diffPriv = ursa.createPrivateKey(fixture.PRIVATE_KEY_2);

    assert.equal(ursa.matchingPublicKeys("1", "2"), false);
    assert.equal(ursa.matchingPublicKeys(123, 123), false);
    assert.equal(ursa.matchingPublicKeys(pub, null), false);
    assert.equal(ursa.matchingPublicKeys(true, pub), false);

    assert.equal(ursa.matchingPublicKeys(pub, pub), true);
    assert.equal(ursa.matchingPublicKeys(priv, priv), true);
    assert.equal(ursa.matchingPublicKeys(pub, priv), true);
    assert.equal(ursa.matchingPublicKeys(priv, pub), true);

    assert.equal(ursa.matchingPublicKeys(pub, samePub), true);
    assert.equal(ursa.matchingPublicKeys(priv, samePriv), true);
    assert.equal(ursa.matchingPublicKeys(pub, samePriv), true);
    assert.equal(ursa.matchingPublicKeys(priv, samePub), true);

    assert.equal(ursa.matchingPublicKeys(pub, diffPub), false);
    assert.equal(ursa.matchingPublicKeys(pub, diffPriv), false);
    assert.equal(ursa.matchingPublicKeys(priv, diffPriv), false);
    assert.equal(ursa.matchingPublicKeys(priv, diffPub), false);
}

function testSigner() {
    var key = ursa.createPrivateKey(fixture.PRIVATE_KEY);
    var signer = ursa.createSigner(fixture.SHA256);

    signer.update(fixture.PLAINTEXT, fixture.UTF8);

    var sig = signer.sign(key, fixture.HEX);

    assert.equal(sig, fixture.PLAINTEXT_SHA256_SIGNATURE);
}

function testVerifier() {
    var key = ursa.createPublicKey(fixture.PUBLIC_KEY);
    var verifier = ursa.createVerifier(fixture.SHA256);
    verifier.update(fixture.PLAINTEXT, fixture.UTF8);
    assert.equal(verifier.verify(key, fixture.PLAINTEXT_SHA256_SIGNATURE,
                                 fixture.HEX),
                 true);

    var verifier = ursa.createVerifier(fixture.SHA256);
    verifier.update(new Buffer(fixture.PLAINTEXT, fixture.UTF8));
    var sigBuf = new Buffer(fixture.PLAINTEXT_SHA256_SIGNATURE, fixture.HEX);
    assert.equal(verifier.verify(key, sigBuf), true);
}

/*
 * Main test script
 */

// Test the native code (reasonably) directly.
require("./native").test();

testBasics();
testTypes();

test_createKey();
test_fail_createPublicKey();
test_fail_createPrivateKey();
test_coerceKey();
test_coercePrivateKey();
test_coercePublicKey();
test_fail_coerceKey();
test_fail_coercePrivateKey();
test_fail_coercePublicKey();

testPublicKey();
testPrivateKey();
testGeneratedKey();
test_sshFingerprint();
test_equalKeys();
test_matchingPublicKeys();
testSigner();
testVerifier();

console.log("All tests pass!");
