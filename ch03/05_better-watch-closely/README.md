# Investing in a better `watch`

This sample builds up on [**ch03e04** Watch Task][1], by breaking down `watch` into many targets, one for each build task that can be affected by file changes.

If you run `grunt dev` this time, and then change some files, you'll see that `watch` will be smart enough about it to run only the build task(s) affected by the changed files, rather than the entire build process. This is the preferred approach because it saves time and gives you a finer-grained control, by avoiding to run tasks unnecessarily, when we know their output will stay the same.

```js
grunt dev
```

Then change a file, sit back, and enjoy.

![compiling.png][2]

P.S: If the `Gruntfile.js`, or any build related files change, altering the process itself, then by all means, run a _full build_ again!

  [1]: https://github.com/buildfirst/buildfirst/tree/master/ch03/04_watch-task "Watch Task Example"
  [2]: http://imgs.xkcd.com/comics/compiling.png "'Are you stealing those LCDs?' 'Yeah but I'm doing it while my code compiles.'"
