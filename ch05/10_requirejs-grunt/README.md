# Compiling RequireJS during builds

This sample is a continuation of [**ch05e09** Using RequireJS][1], where we learned how to create AMD modules that have some dependencies in them. You can [learn more about RequireJS and AMD modules][2] in the book.

In order to compile AMD modules through `r.js`, the RequireJS optimizer, we can use the [grunt-contrib-requirejs][3] package. That package will essentially allow us to pass options through to `r.js`. Below is the pertinent task configuration. Something I haven't discussed yet is the ability to define _default options_, which apply to every target, in Grunt. This is useful when we'd otherwise have to repeat a bunch of configuration, breaking the DRY (don't repeat yourself) principle.

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

The `build:debug` task target will bundle all of the RequireJS modules and also create a source map so we're still able to debug seamlessly. The `build:release` version will also minify the bundle, but it won't produce a source map.

  [1]: https://github.com/bevacqua/buildfirst/tree/master/ch05/09_requirejs-usage
  [2]: http://bevacqua.io/buildfirst "JavaScript Application Design"
  [3]: https://github.com/gruntjs/grunt-contrib-requirejs
