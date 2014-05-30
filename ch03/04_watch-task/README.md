# The Grunt `watch` Task

This sample builds up on [**ch03e01** Distribution Config][1], adding a watch task to re-execute the build process during development, whenever a file changes.

The debug flow gets an all-new `watch` task! It is now _aliased_ as `dev`:

```shell
grunt dev
```

After the `build:debug` task completes, the `watch` task will wait for any files to change. Go ahead and make a change to any of the files in the `public` directory, save that, and you'll see `watch` in your terminal will take care of running the `build:debug` task again for you.

The release flow, however, stays the same:

```shell
grunt build:release
```

  [1]: https://github.com/buildfirst/buildfirst/tree/master/ch03/01_distribution-config "Distribution Config"
