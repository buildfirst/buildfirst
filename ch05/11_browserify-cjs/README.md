# Browserify: Take your Common.JS packages for a ride!

[![browserify.png][1]][2]

[Browserify][2] is a pretty awesome tool authored by [@substack][3], which allows you to bring CJS packages into the browser. In [the book][4] we introduce the concept, and then compare it to RequireJS.

The [grunt-browserify][5] plugin has a really interesting read which is worth checking out, talking about the benefits of using CJS modules.

The `build:debug` task target will bundle all of the CJS modules and also create a source map so we're still able to debug seamlessly. Note that a source map _file_ won't actually be created, but instead it will be embedded right into our bundle, with something known as a [base64 encoded data uri][6]. The `build:release` version will also minify the bundle, but it won't produce a source map. Once you've built, open the example from your shell, using:

```shell
open test.html
```

<sub>(or just open `test.html` in your favorite browser)</sub>

  [1]: http://substack.net/images/browserify_logo.png
  [2]: https://github.com/substack/node-browserify
  [3]: https://github.com/substack
  [4]: https://ponyfoo.com/bf "JavaScript Application Design"
  [5]: https://github.com/jmreidy/grunt-browserify
  [6]: https://developer.mozilla.org/en/docs/data_URIs "Data URI explained in MDN"
