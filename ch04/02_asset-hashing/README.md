# Static Asset Hashing

Hashing allows us to set up far-future `Expires` headers in our static assets, vastly improving the performance of our web experience. This example uses `grunt-rev` to set up the hashes, and it will produce a hash on all of our static content: images, CSS, and JS.

To get set up, and see `rev` in action, run this in your shell:

```shell
grunt clean copy rev
```

Then, we need to update our HTML to reflect these file path changes, otherwise we'd be sprinkling `404` HTTP status codes all over the web. To update our CSS with the correct relative URL to the image, and the HTML with the correct URL to, well, everything... we'll just use `grunt-usemin`, which fixes these paths for us.

```shell
grunt usemin
```

I've also set up a convenient `release` build flow _alias_ we can now re-use:

```js
grunt.registerTask('build:release', ['clean', 'copy', 'rev', 'usemin']);
```

With it, we can simply do:

```shell
grunt build:release
```

It should be obvious, at this point, how easy it is to integrate cache busting with static asset hashing into our everyday build flow. Simply adding the `rev` and `usemin` tasks to the `release` flow would do. All we need to do after that is add an `Expires` header to our static assets, as we'll see in later chapters.