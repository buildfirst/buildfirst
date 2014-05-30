# Clean Task

This example shows how to configure a Grunt clean-up task, as discussed in Chapter 2 of the book. This example is a continuation of [**ch02e04** Bundle Then Minify][1].

In the example, we'll be cleaning the `build/js` directory before we `concat` and `uglify`, in the `js` task. Given that we were already using `grunt js` to compile our JavaScript files, our workflow doesn't need to change: only the task's internals did.

In addition, we can now use the following command to clean up build-generated content.

```shell
grunt clean
```

  [1]: https://github.com/buildfirst/buildfirst/ch02/04_bundle-then-minify "Bundle Then Minify Example"
