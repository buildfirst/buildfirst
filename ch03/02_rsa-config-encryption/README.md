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

The resulting file is encrypted, and can only be decrypted using the key in your control. If you try to open it, it'll contain something like this `xxd` dump:

```
0000000: 405f b4bd 12e0 f6e7 8fa3 8d2d 6ad6 8b0e  @_.........-j...
0000010: 629c 5cc0 43df 90f0 ecb1 62a2 d1f3 6961  b.\.C.....b...ia
0000020: 20cf 99f0 5101 cd10 423d 7fa5 b8d9 d860   ...Q...B=.....`
0000030: 720f e5da 4f99 5b62 278d 51ed 044c 7386  r...O.[b'.Q..Ls.
0000040: 270a 98dd 93b1 82e5 4893 1f52 9541 d4c4  '.......H..R.A..
0000050: 192f 090e e58e 0e3c d481 05b8 e2b1 8ec3  ./.....<........
0000060: 594d 4753 5b2f 2cc5 ed19 faa7 e610 b987  YMGS[/,.........
0000070: 66aa 39a7 9562 773b 1e08 924c 87a9 11bb  f.9..bw;...L....
0000080: 0b16 bca3 02ff d875 b11b 9813 44e5 91d2  .......u....D...
0000090: a62b 9d5c 4afa f5d3 f5ee 8812 aefc 0162  .+.\J..........b
00000a0: c610 f024 5f9b 5667 7f22 3dc7 703e 5fec  ...$_.Vg."=.p>_.
00000b0: 0247 cce7 7fd0 5b14 9ba8 693c 38db 7fae  .G....[...i<8...
00000c0: a401 749d 72a3 38ad 7fa2 8f26 b5e3 1db8  ..t.r.8....&....
00000d0: 7c48 da2c 3e3d db08 5948 21d5 7090 5b92  |H.,>=..YH!.p.[.
00000e0: 9250 ffff 64c9 da7f 3297 7043 5222 c22f  .P..d...2.pCR"./
00000f0: c49e 5fdf ea29 679e e5d0 c3ce f518 94aa  .._..)g.........
0000100: 2270 e4b8 5087 1872 2f5e f647 739f 608a  "p..P..r/^.Gs.`.
0000110: b482 1722 d3ae 4f7a 3f02 82ba 77ef 271e  ..."..Oz?...w.'.
0000120: d522 02d9 452a cbc8 1171 789c 2298 ba70  ."..E*...qx."..p
0000130: 094d a93c b47a 80ca 8b27 2b05 336b aaa5  .M.<.z...'+.3k..
0000140: 2d16 753b 9ab3 5285 f463 96ae dcb0 e3e4  -.u;..R..c......
0000150: 7d87 952e 155b 65e5 97dd 2d51 1e9f bc66  }....[e...-Q...f
0000160: aa12 3d9e d6dd 487d a5e1 f387 7591 fff5  ..=...H}....u...
0000170: 6e74 6b87 a33d 4311 d9c2 ce24 a6a4 6908  ntk..=C....$..i.
0000180: 2672 3ead 5029 dc48 f658 0646 5a52 18b4  &r>.P).H.X.FZR..
0000190: 1cd4 b13a 7139 5d64 c62b 9b3a a4eb 468b  ...:q9]d.+.:..F.
00001a0: e139 c8b1 b5ee 32ef 8458 5fe9 d094 3f55  .9....2..X_...?U
00001b0: 5450 fe80 f035 3ff9 2496 dff6 b228 d49f  TP...5?.$....(..
00001c0: b27b 029a 086c 816e dcd3 5463 f86d 6436  .{...l.n..Tc.md6
00001d0: 9913 c176 5b79 b68c 154c c209 83f0 d16d  ...v[y...L.....m
00001e0: 7415 397e 20ee ae3a 0d93 5978 7b66 cc71  t.9~ ..:..Yx{f.q
00001f0: de34 b6a0 7f3b 803b 2081 7bcd 67db 2ab9  .4...;.; .{.g.*.
0000200: f5d7 97f7 2086 2473 dd6b 6859 80e1 397b  .... .$s.khY..9{
0000210: d8ae 83de 4dc1 a3f2 9393 1e60 0a7f 82cb  ....M......`....
0000220: f5e0 138c 9a24 ab5b 254a 6eb0 2b04 65dd  .....$.[%Jn.+.e.
0000230: 38d7 281f ee89 e138 6f63 7fab 48cb 3053  8.(....8oc..H.0S
0000240: b99e c034 04d3 929b 9f67 5dd1 f9eb d0ad  ...4.....g].....
0000250: 096e 6290 e27e 8dc9 f38c dde9 07e2 6ad8  .nb..~........j.
0000260: 3557 a778 fbbd 4764 8b6d 97b9 34e8 f79f  5W.x..Gd.m..4...
0000270: ce27 8e4c 5cb0 8408 e5f6 a15a ff91 f1b0  .'.L\......Z....
0000280: 77b3 760f 194a 73ff deb3 3c67 e3b3 1ebc  w.v..Js...<g....
0000290: 5ee1 dc3e 2ab9 d3ee f2dd 096d a084 8c02  ^..>*......m....
00002a0: 4e7a 6912 43e7 5ca0 56b0 a57c d05f 2482  Nzi.C.\.V..|._$.
00002b0: ad96 f554 f287 bc7b 533a 0268 d405 a961  ...T...{S:.h...a
00002c0: eec7 f6f0 e82c e8cd aca0 a0a8 b95c 2f47  .....,.......\/G
00002d0: 09f4 5f75 a9c2 fa55 52be 4d33 d70f a719  .._u...UR.M3....
00002e0: eebb d0d3 7da5 70c0 17c2 5346 24ad 746b  ....}.p...SF$.tk
00002f0: b6e3 f1ec 0086 ea3d 643f d83a cf8f 5853  .......=d?.:..XS
0000300: 5aa9 4d09 c672 2e54 9430 df24 9f37 e602  Z.M..r.T.0.$.7..
0000310: 68ec 2ff3 5a28 c003 854e ae95 c1c7 6680  h./.Z(...N....f.
0000320: 7242 3cbb faba 50c8 6ac6 4e76 ed52 539c  rB<...P.j.Nv.RS.
0000330: 5e89 ef11 0a34 da22 221f f5a7 20bc 4c4f  ^....4.""... .LO
0000340: 8cb8 2422 433a d6c3 c965 d141 d77c 8857  ..$"C:...e.A.|.W
0000350: dfc8 b825 09ba 70f9 65ef 30a7 ff36 eaac  ...%..p.e.0..6..
0000360: fa65 05cb 882c 66d2 ae7c dde9 f823 dfec  .e...,f..|...#..
0000370: 35b0 13fa 1453 41c0 c921 10ef 734b 94f9  5....SA..!..sK..
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