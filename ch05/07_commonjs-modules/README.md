[![commonjs.jpg][1]][2]

The [Common.JS Modules Specification][2] defines how modules are loaded, how they interact with each other, and more importantly, how they can prevent issues commonly attributed to client-side JavaScript such as variables leaking to the global scope, or difficulty turning things private (making us resort to [**ch05e02** information hiding][3] practices such as [**ch05e05** using closures][4].

In these simple examples, you can attest how Common.JS modules work. The first example shows how modules can load each other. Run it in your shell like below.

```shell
node app
```

The second example simply mentions some of the things to take into account, as well as [the default globals][5] that take part of the Node.js platform.

```shell
node behavior
```

  [1]: http://i.imgur.com/fxJcqCJ.jpg
  [2]: http://wiki.commonjs.org/wiki/CommonJS "Common.JS wiki home"
  [3]: https://github.com/buildfirst/buildfirst/tree/master/ch05/02_information-hiding
  [4]: https://github.com/buildfirst/buildfirst/tree/master/ch05/05_closures
  [5]: http://nodejs.org/api/globals.html
