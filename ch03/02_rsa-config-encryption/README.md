# Encrypt your configuration with RSA keys

We'll use three different Grunt tasks for encryption. The first one will generate the private key, the other two will encrypt and decrypt our configuration using that private key. This is the code listing as discussed in chapter 3 of the book.

This sample uses the [grunt-pemcrypt](https://github.com/bevacqua/grunt-pemcrypt) package, which provides us with three Grunt tasks: `pem_gen`, `pem_encrypt`, and `pem_decrypt`.

# Encryption flow

To run this example, start by generating the RSA key:

```shell
grunt pem_gen:bar
```

![rsa-keygen.png][1]

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

![rsa-encryption.png][2]

The resulting file is encrypted, and can only be decrypted using the key in your control. If you try to open it, it'll contain something like:

```
ÒßÈÚ2µÒBa    äÊ,ÐPŸª8‚V'Û¦¼‚$â<Ñg¼07Z˜4Æú»'É¤Ê ‘N©`ÎÁ¾’‚&‘Gü¥ü3*ùá™/ù{Šx2Nj   I@˜¥ÄøŽ¹¾ô4rñçzKy@OlŠÚ:¥œ‰!à
¡0}d‘Ò¯ûü‘´˜a’c3ÕfÆ…œš†ZúOäº'µðï­ÑªE‚K[Ð-A[Ì¢Ó cJ¬d8ŒŽ¼ÒÇ| U§SUÏY·å‚…ÀùŽn@²Yc[” [ØáŽâ;À¼  ¯½y„¼Íh©o.Câ½PfUs?PH©BE>}dÚ“{Gp„¬dx“wÖõÁ-4¡ámñóe#vÆûvê&`9
´   Iqà]¥ÌØ¦çJÝPõ¢5wAaº°Å…Ô=âÄMCŠŒZáˆg    a7·%¹lzb!’úæJvXóxóúëª‚ôOªX$°õ\ ³Xü0X—kñæ"äq€Rˆ`˜ø‘¢?oØ&U=ìçÃcíÒ›íÀAùâ—­‰h9Lº‚•Ù%®ß1tŒ$ðcw§Þî{&^.§¡¯ÆÆ€^Y@ ]…â7™ñA©l>JC
3ù@ÞÉŠ{Xjcá¸] ©°cB–ñv"!zþZz†°GÒùô_©x)Bø\ŸXo€Ð–Û.½ÜSÊ|µ
Ò›dµÒ€Dˆ~¥hÖ«(*þâü·Ó3¬~\§@åcÖu&Ûîj<*[ú¥ár=_Øá]Z[Dû^l#N$àç5‹<T6W™ÒÌõÃš¤Ì
~žý*-Ì¼?•Ë¤k^`ø^¦Ÿ©Ý^½ÃXï¦Çì  å‘µÃIÓRw~ˆS2¥™hú#^¯ k¬Ê…a?¢¨X:ïÛS½
```

The `.pemjson` file can be safely commited to source control, _as long as you don't provide the `.pem` key to anyone_.

# Decryption flow

I included a secure `foo.pemjson` file in this repository. However, that is no good for you, unless you have the private key to decode it.

For educational purposes, I created [a secret gist with the key](https://gist.github.com/bevacqua/4bdd042526b51681ca29), and you can get it by running this command in your favorite shell (assuming you're sitting in this example's root folder):

```shell
curl https://gist.github.com/bevacqua/4bdd042526b51681ca29/raw/ba2295d9b7399956439dc28056a0e7e13dca1f0e/foo.pem > private/foo.pem
```

Now you're able to decrypt `secure/foo.pemjson`! Just do `grunt_decrypt:foo`, and find the awesome treats inside. _(Okay, not that awesome)_.

To recap

- Create a private key, don't share it with anyone
- Use it to encrypt your sensitive files
- Transmit the encrypted file with your code-base
- When you need to update the secure file, just update the plain one and encrypt it again
- When someone else copies your code-base, they won't be able to access the encrypted configuration _unless you provide them_ with the key

  [1]: http://i.imgur.com/JnVeOwG.png
  [2]: http://i.imgur.com/ah0ZP8g.png