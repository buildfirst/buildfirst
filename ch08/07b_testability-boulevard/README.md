# Testability Boulevard

[![tape.png][1]][2]

This example builds on top of [**ch07e10** The Road Show][6] and [**ch08e02** Tape in the Browser][8], adding unit tests to a few key components: the router, and model validation. You are then free to explore adding test coverage for the view controllers!

Note that we had to add a special step because the `grunt-browserify` package doesn't support usage of the `b.require(module, { entry: true }` API _as of this example being created_.

```js
grunt.registerTask('browserify_tests', function browserifyTests () {
  var done = this.async();
  var main = require.resolve('./test/routes');
  var dir = __dirname + '/test/build';

  // create required directory structure
  mkdirp.sync(dir);

  // compile browserify bundle
  var b = browserify()
    .transform('brfs') // add brfs transform for mustache templates
    .plugin(proxyquire.plugin); // use proxyquire plugin to

  glob
    .sync('./test/*.js') // get all test modules
    .map(resolve) // resolve them to their full paths
    .reduce(include, b) // require them in the browserify bundle
    .bundle() // bundle them together
    .pipe(fs.createWriteStream(dir + '/test-bundle.js')) // write to disk
    .on('done', done); // end the Grunt task

  function include (b, m) {
    // `entry: true` means that it's not just accessible
    // outside of the bundle, but also an entry point
    b.require(m, { entry: true });
    return b;
  }
});
```

To run this example you'll need to build the application with Browserify, I've set up Grunt for that, just like in [**ch05e11** Browserify + Common.JS][4].

```shell
grunt build
```

Once you build it, you can see it in action just opening the HTML page. Make sure you browse through the code! I'm sure you'll find **interesting comments and advice** in there!

```shell
open app.html
```

You should see the application as shown below, opened in your favorite browser. You can run the tests by opening the `test/runner.html` file in your browser, and checking out the browser `console`.

![road-show.png][7]

Browse the code and check out the comments to learn more!

[1]: https://raw.github.com/buildfirst/buildfirst/master/images/tape.png
[2]: http://backbonejs.org/ "Backbone.js MVC Framework"
[3]: http://browserify.org/
[4]: https://github.com/buildfirst/buildfirst/tree/master/ch05/11_browserify-cjs
[5]: http://mustache.github.io/
[6]: https://github.com/buildfirst/buildfirst/tree/master/ch07/10_the-road-show
[7]: https://raw.github.com/buildfirst/buildfirst/master/images/road-show.png
[8]: https://github.com/buildfirst/buildfirst/tree/master/ch08/02_tape-in-the-browser
