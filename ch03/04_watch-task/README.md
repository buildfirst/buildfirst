# The Grunt `watch` Task

This sample builds up on [**ch03e01** Distribution Config](https://github.com/bevacqua/buildfirst/tree/master/ch03/01_distribution-config), adding a watch task to re-execute the build process during development, whenever a file changes.

The debug flow gets an all-new watch task:

```shell
grunt build:debug watch
```

The release flow stays the same:

```shell
grunt build:release
```