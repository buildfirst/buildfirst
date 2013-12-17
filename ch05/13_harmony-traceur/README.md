# Harmony through Traceur, using Grunt

![es6.png][1]

This example demonstrates how to use the [`grunt-traceur`][2] package to compile Harmony code down to ES3, so that it can be used anywhere ES3 is supported. It is actually really straightforward, if we ignore the language for now.

Compile using:

```shell
grunt build:debug
```

Note that Traceur [doesn't implement all of ES6][3]. Modules, in particular, are only partially implemented. In the book you'll learn different ways you can execute Harmony code today.

  [1]: http://i.imgur.com/YHcJpVd.png
  [2]: https://github.com/aaronfrost/grunt-traceur
  [3]: https://github.com/google/traceur-compiler/wiki/LanguageFeatures
