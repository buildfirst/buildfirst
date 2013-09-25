# Encrypt your configuration with RSA keys

We'll use three different Grunt tasks for encryption. The first one will generate the private key, the other two will encrypt and decrypt our configuration using that private key. This is the code listing as discussed in chapter 3 of the book.

To run this example, start by generating an RSA key:

```shell
grunt pem_gen
```

This will create an RSA key for you in `bin/private`