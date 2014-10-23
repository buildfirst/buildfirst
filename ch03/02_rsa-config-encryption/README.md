# Encrypt your configuration with RSA keys

We'll use three different Grunt tasks for encryption. The first one will generate the private key, the other two will encrypt and decrypt our configuration using that private key. This is the code listing as discussed in Chapter 3 of the book.

This sample uses the [grunt-pemcrypt][1] package, which provides us with three Grunt tasks: `pem_gen`, `pem_encrypt`, and `pem_decrypt`.

# Encryption flow

To run this example, start by generating the RSA key:

```shell
grunt pem_gen:bar
```

![rsa-keygen.png][2]

This will create an RSA key for you in `private/bar.pem`. It will look something like this:

```
-----BEGIN RSA PRIVATE KEY-----
MIISKAIBAAKCBAEAyNTNgtPCp9Ppr4qq7BvsqYtsF+z+a1yLsmzuoAe8Q43TC4ld
E0AYR4d9m6aNnXsuXLiANbNgd0E2nptH7Djji6HuzBHXtSECfYknEPPorg1KxuS7
j5HoSWh6G52NOzG5QVb/djLkQPvXBe/rpnCdwfJxJkVRlGeYisJEFu96cnLWnxT0
XnRzP9TGhLmwlYlL1kXOVlOfQw+jISWyk4Dw1uPaavYfTmbCapQw328B+FDXttwU
uYiOjCwQfmg5ZDBx5+y728Xl7esIqq6J8FyuzBenTwxh7lIUS4PJinczthk4WbT8
KQqYGzdCPS7GFuFa4gfbgyTZi7Sl1teYQbs20vF2O5s9typoo9m6kC3XFgLHb61N
SXa9W76khERWAcaFtcFOO1wIA0dxqCzSEilTS280gzLbwp/yCK6SePtXzgeL9fm2
6YN/7eqBVSwLruBQ2XW93GuZ9sKmABNno6dwBb7OFeSs

[...]

1PZT/V+G1bMCggIAYP4Nty8UTnuLMrh8mIGYareBhNU++Pt28uTeDFhGuTs2HHAL
yc/lPXNDt90TcOvBMwOGKNyXfmRc5MUH/UuE8xJE7ablj668Z2DDuEDOdT72lMRs
v65jwm4oVh4/JW7VkaKF/BNhdxoj23skbSjgm6Xc8ktndEstzkAy7oJgzKhDvZIK
SH1fPvvEzQXQlR1PSos/ki7Dw5IIYOxBMFi34Rkzce7kY4h0GqIfS7woXiZ91K2r
5pvCoJAblIKqU5y+3dGWkqomhCU42K3z2152ygLuWxmatHUtwSsA2wKpNn1TNIZc
RmL7cx3QdWxZ7luxAnu5PTgpyzjS5oD6pgOsESlngdT6MzATI/ySvsCctMRv2V6g
MYfS6EUmylFrSJTHh5JqqSVFVJE9ST8MT5SEwBSJa6g87npdN5tI4BXyKJohjgEb
hpINcQugjeYh+zE1nMDDqkzDbSDX4fS5acCpllk0W9+y8g0gS02IiTR8cTHFv76a
rhpC4LslgVNoUxsSpTQyOZocwVXrxN4euhDE2rqTKle16D8fRSqYJq81xtWSQLH9
xIc8qfyQzDiFPMcl0UCdJNZ/OO6DukyasUwIvJmoJ5/wlFLC9mrYF+dg+Rt6kVUZ
ydSj/aYQU1am2m5XiT3xSLSaCwqRLvVvTPZGVJdcBL+2yIZ8+jsTYJdqw7E=
-----END RSA PRIVATE KEY-----
```

Next, you'll want to create your sensitive configuration file. You can put this file in `private/bar.json`. Here's an example you can copy and paste.

```json
{
    "API_SECRET": "rhpC4LslgVNoUxsSpTQyOZocwVXrxN4euhDE2rqTKle16D8fRSqYJq81xtWSQLH9",
    "API_KEY": "ki7Dw5IIYOxBMFi34Rkzce7kY4h0GqIfS7woXiZ91K2r",
    "PORT": 8080
}
```

Now you can encrypt it using `grunt pem_encrypt:bar`, and you should see output similar to this:

![rsa-encryption.png][3]

The resulting file is encrypted, and can only be decrypted using the key in your control. If you try to open it, it'll contain something like this `xxd` dump:

```
0000000: 405f b4bd 12e0 f6e7 8fa3 8d2d 6ad6 8b0e  @_.........-j...
0000010: 629c 5cc0 43df 90f0 ecb1 62a2 d1f3 6961  b.\.C.....b...ia
0000020: 20cf 99f0 5101 cd10 423d 7fa5 b8d9 d860   ...Q...B=.....`
0000030: 720f e5da 4f99 5b62 278d 51ed 044c 7386  r...O.[b'.Q..Ls.
0000040: 270a 98dd 93b1 82e5 4893 1f52 9541 d4c4  '.......H..R.A..
0000050: 192f 090e e58e 0e3c d481 05b8 e2b1 8ec3  ./.....<........

[...]

0000380: e114 f195 b68d 2548 4fc8 9be7 42e0 a4d9  ......%HO...B...
0000390: 3c9d deb7 a8b3 9ce4 0c2d 34fe f63b 3cd1  <........-4..;<.
00003a0: 9f70 a7a9 7bc4 9826 b2ae 0a6c 7ba9 1a79  .p..{..&...l{..y
00003b0: b4c0 1d76 8e83 d9e9 3e17 ba61 1888 360d  ...v....>..a..6.
00003c0: 7600 da41 0355 8f5c c4b1 3950 4eec e161  v..A.U.\..9PN..a
00003d0: 8795 8581 d501 e8ff 062f f869 1bd3 52aa  ........./.i..R.
00003e0: 9084 8a0c 11cd bf52 5ed4 4984 ab78 e035  .......R^.I..x.5
00003f0: d06b 154e b39d 5447 e99c 39a9 03bf 240d  .k.N..TG..9...$.
```

The `.pemjson` file can be safely commited to source control, _as long as you don't provide the `.pem` key to anyone_.

# Decryption flow

I included a secure `foo.pemjson` file in this repository. However, that is no good for you, unless you have the private key to decode it.

For educational purposes, I created [a secret gist with the key][4], and you can get it by running this command in your favorite shell (assuming you're sitting in this example's root directory):

```shell
curl https://gist.githubusercontent.com/bevacqua/4bdd042526b51681ca29/raw/ba2295d9b7399956439dc28056a0e7e13dca1f0e/foo.pem > private/foo.pem
```

Now you're able to decrypt `secure/foo.pemjson`! Just do `grunt pem_decrypt:foo`, and find the awesome treats inside. _(Okay, not that awesome)_.

To recap

- Create a private key, don't share it with anyone
- Use it to encrypt your sensitive files
- Transmit the encrypted file with your code-base
- When you need to update the secure file, just update the plain one and encrypt it again
- When someone else copies your code-base, they won't be able to access the encrypted configuration _unless you provide them_ with the key

[![password-entropy.png][5]][6]

  [1]: https://github.com/bevacqua/grunt-pemcrypt
  [2]: http://i.imgur.com/JnVeOwG.png
  [3]: http://i.imgur.com/ah0ZP8g.png
  [4]: https://gist.github.com/bevacqua/4bdd042526b51681ca29
  [5]: http://imgs.xkcd.com/comics/password_strength.png
  [6]: http://xkcd.com/936/ "To anyone who understands information theory and security and is in an infuriating argument with someone who does not (possibly involving mixed case), I sincerely apologize."
