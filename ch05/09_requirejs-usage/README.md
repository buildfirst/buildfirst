# Using RequireJS

![requirejs.png][1]

[Require.js][2] is a JavaScript _module loading_ library. Popularized by [@jrburke][3], this script loader is one of many ways to address [dependency hell][4] in client-side JavaScript.

This sample depicts the basic usage form of the module loader, while the book analyzes the benefits and drawbacks of using it. The library version being used is [RequireJS _2.1.9_][5]. Run the example from your shell, using:

```shell
google-chrome test.html
```

<sub>(or just open `test.html` using your favorite browser)</sub>

Note that this sample merely outputs a few values to the developer console, so you better open it up!

> The bottom line is that RequireJS is better than doing no dependency management whatsoever, but probably more convoluted than necessary, as the alternatives we'll explore next will show.

_A deeper analysis can be found in the book._

  [1]: http://i.imgur.com/TkjgTBt.png
  [2]: https://github.com/jrburke/requirejs
  [3]: https://github.com/jrburke
  [4]: http://en.wikipedia.org/wiki/Dependency_hell "Dependency Hell on Wikipedia"
  [5]: http://requirejs.org/docs/release/2.1.9/comments/require.js
