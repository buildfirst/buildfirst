# A better `watch`

This sample builds up on [**ch03e04** Watch Task](https://github.com/bevacqua/buildfirst/tree/master/ch03/04_watch-task), by breaking down `watch` into many targets, one for each build task that can be affected by file changes.

If you run `grunt dev` this time, and then change some files, you'll see that `watch` will be smart enough about it to run only the build task(s) affected by the changed files, rather than the entire build process. This is the preferred approach because it saves time and gives you a finer-grained control, by avoiding to run tasks unnecessarily, when we know their output will stay the same.

```js
grunt dev
```

Then change a file, sit back, and enjoy.

![compiling.png][1]

P.S: If the `Gruntfile.js`, or any build related files change, altering the process itself, then by all means, run a _full build_ again!

  [1] http://imgs.xkcd.com/comics/compiling.png