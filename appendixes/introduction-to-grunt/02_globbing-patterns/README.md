# Globbing Patterns

In this sample we investigate the behavior of `glob`, the library used in Grunt to perform file globbing, as described in the **Introduction to Grunt** appendix.

Here's a list of test cases that I thought you might find interesting to look at.

```
var cases = [
  ['something', '!something', []],
  ['!something', 'something', ['something']],
  ['things/a{,nother}/thing', ['things/a/thing', 'things/another/thing']],
  ['things/**/*', '!things', ['things/a', 'things/a/thing', 'things/another', 'things/another/thing']],
  ['things/**/*', '!things', []],
  ['things/**/*', '!things/**/*', []]
];
```

To run these tests, just do `node test`. You'll see the output that can be found below.

![tests.png][1]

Note in particular how `['things/**/*', '!things']` actually matches something, rather than `[]`. You'll learn about the details of pattern matching with glob in the appendix.

  [1]: https://f.cloud.github.com/assets/934293/1867060/e5e7dcd4-7846-11e3-8556-b9bb441b76a8.png
