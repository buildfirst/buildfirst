# Browserify: Take your Common.JS packages for a ride!

[![browserify.png][1]][2]

[Browserify][2] is a pretty awesome tool authored by [@substack][3], which allows you to bring CJS packages into the browser. In [the book][4] we introduce the concept, and then compare it to RequireJS.

The [grunt-browserify][5] plugin has a really interesting read which is worth checking out, talking about the benefits of using CJS modules.

The `build:debug` task target will bundle all of the RequireJS modules and also create a source map so we're still able to debug seamlessly. The `build:release` version will also minify the bundle, but it won't produce a source map. Once you've built, open the example from your shell, using:

```shell
google-chrome test.html
```

<sub>(or just open `test.html` in your favorite browser)</sub>

  [1]: http://substack.net/images/browserify_logo.png
  [2]: https://github.com/substack/node-browserify
  [3]: https://github.com/substack
  [4]: http://bevacqua.io/buildfirst "JavaScript Application Design"
  [5]: https://github.com/jmreidy/grunt-browserify
