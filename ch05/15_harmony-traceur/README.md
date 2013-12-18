# Harmony through Traceur, using Grunt

![es6.png][1]

This example demonstrates how to use the [`grunt-traceur`][2] package to compile Harmony code down to ES3, so that it can be used anywhere ES3 is supported. It is actually really straightforward, if we ignore the language for now.

Compile using:

```shell
grunt build:debug
```

For a comprehensive **compatibility table of ECMAScript 6** features, [_click here_][3].

> Note that Traceur [doesn't implement all of ES6][4]. Modules, in particular, are only partially implemented. In the book you'll learn _a few different ways_ in which you can execute Harmony code today.

  [1]: http://i.imgur.com/YHcJpVd.png
  [2]: https://github.com/aaronfrost/grunt-traceur
  [3]: http://kangax.github.io/es5-compat-table/es6/
  [4]: https://github.com/google/traceur-compiler/wiki/LanguageFeatures
