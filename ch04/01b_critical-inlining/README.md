# Inlining Critical CSS

This sample demonstrates how to use [grunt-critical][1] to inline critical CSS in your pages, as explained in Chapter 4 [in the book][2].

To run the example, make sure you have all dependencies installed and then run the following command.

```shell
grunt build:release
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
[2]: https://github.com/buildfirst/buildfirst
