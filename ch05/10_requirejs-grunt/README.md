# Compiling RequireJS during builds

[![requirejs.png][1]][2]

This sample is a continuation of [**ch05e09** Using RequireJS][3], where we learned how to create AMD modules that have some dependencies in them. You can [learn more about RequireJS and AMD modules][4] in the book. Here we will learn how to compile RequireJS modules using a Grunt task.

In order to compile AMD modules through `r.js`, the RequireJS optimizer, we can use the [grunt-contrib-requirejs][5] package. That package will essentially allow us to pass options through to `r.js`. Below is the pertinent task configuration. Something I haven't discussed yet is the ability to define _default options_, which apply to every target, in Grunt. This is useful when we'd otherwise have to repeat a bunch of configuration, breaking the DRY (don't repeat yourself) principle.

```js
requirejs: {
  options: {
    name: 'app',
    baseUrl: 'js/amd',
    out: 'build/js/app.min.js'
  },
  debug: {
    options: {
      preserveLicenseComments: false,
      generateSourceMaps: true,
      optimize: 'none'
    }
  },
  release: {}
}
```

The `release` target doesn't have any additional configuration, because it merely uses the defaults provided earlier. It'll be easier for you to visualize this sample by looking at the directory structure, which looks like the one below, after a build.

```
├── build
│   └── js
│       └── app.min.js
├── js
│   ├── amd
│   │   ├── lib
│   │   │   └── text.js
│   │   └── app.js
│   └── vendor
│       └── require.js
└── Gruntfile.js
```

The `build:debug` task target will bundle all of the RequireJS modules and also create a source map so we're still able to debug seamlessly. The `build:release` version will also minify the bundle, but it won't produce a source map. Once you've built, you can open the example from your shell, using:

```shell
open test.html
```

<sub>(or just open `test.html` in your favorite browser)</sub>

  [1]: http://i.imgur.com/TkjgTBt.png
  [2]: https://github.com/jrburke/requirejs
  [3]: https://github.com/buildfirst/buildfirst/tree/master/ch05/09_requirejs-usage
  [4]: http://bevacqua.io/buildfirst "JavaScript Application Design"
  [5]: https://github.com/gruntjs/grunt-contrib-requirejs
