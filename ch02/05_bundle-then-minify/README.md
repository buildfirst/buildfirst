# Bundle + Minify Task
#### And, _an alias_

This example shows how to configure bundling and minification Grunt tasks together, as discussed in Chapter 2 of the book. This example is a continuation of [**ch02e02** Bundle Task][1].

In the example, we'll be bundling together all of the `*.js` files in `public/js`, and placing them in a bundled file at `build/js/bundle.js`. Then, we'll minify that file into `all.min.js`.

First, we want to concatenate our scripts. This way, we only need to minify them once, rather than each file individually.

```shell
grunt concat:js
```

Once the scripts are bundled together in `build/js/bundle.js`, we can run the next command, minifying the script.

```shell
grunt uglify:bundle
```

We could also streamline this using just one command in Grunt.

```shell
grunt concat:js uglify:bundle
```

An even better way, is to use an alias, like so:

```shell
grunt js
```

This alias was declared in the Gruntfile to help us perform this common operation in one shot. The relevant code snippet is below:

```js
grunt.registerTask('js', 'Concatenate and minify js files', ['concat:js', 'uglify:bundle']);
```

  [1]: https://github.com/buildfirst/buildfirst/ch02/02_bundle-task "Bundle Task Example"
