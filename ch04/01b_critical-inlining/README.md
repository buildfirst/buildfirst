# Inlining Critical CSS

This sample demonstrates how to use [grunt-critical][1] to inline critical CSS in your pages, as explained in Chapter 4 [in the book][2].

[![critical.png][3]][4]

<sub>Note that [grunt-critical][1] uses [critical][4] internally to infer the critical CSS styles for your page.</sub>

To run the example, make sure you have all dependencies installed and then run the following command.

```shell
grunt build:release
```

If you run the command below, the resulting page should open up in your favorite browser. Note how the `h1` styles were inlined because they're visible on first load, while the others weren't inlined. These will be loaded a bit later, but by the time the human scrolls down they should have already loaded! As a result, the experience becomes faster.

```shell
open build/page.html
```

The configuration we used is outlined below. Go through the documentation for [comprehensive details about each option][1].

```js
critical: {
  example: {
    options: {
      base: './',
      css: ['page.css']
    },
    src: 'views/page.html',
    dest: 'build/page.html'
  }
}
```

Note that if the `dest` file is a stylesheet, the resulting critical-path css is saved to this file for later use. If `dest` points to an HTML file the resulting CSS gets inlined and the exiting stylesheets are wrapped in a javascript function to load them asynchronously as well as a `<noscript>` block for users with javascript disabled.

[1]: https://github.com/bezoerb/grunt-critical
[2]: http://bevacqua.io/buildfirst
[3]: https://camo.githubusercontent.com/b4ecb54a743937e267790244e81901bbecd55f2d/687474703a2f2f692e696d6775722e636f6d2f6c417a6d4244322e706e67
[4]: https://github.com/addyosmani/critical
