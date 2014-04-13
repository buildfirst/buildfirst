# Globbing Patterns

In this sample we investigate the behavior of `glob`, the library used in Grunt to perform file globbing, as described in the **Introduction to Grunt** appendix.

Here's a list of test cases that I thought you might find interesting to look at.

```
var cases = [
  ['something', '!something', []],
  ['!something', 'something', ['something']],
  ['things/a{,nother}/thing', ['things/a/thing', 'things/another/thing']],
  ['things/**/*', '!things', ['things/a', 'things/a/thing', 'things/another', 'things/another/thing']],
  ['things', ['things']],
  ['things', '!things/another', ['things']],
  ['things/**/*', '!things', []],
  ['things/**/*', '!things/a', []],
  ['things/**/*', '!things/**/*', []]
];
```

To run these tests, just do `node test`. You'll see the output that can be found below.

![tests.png][1]

Note in particular how `['things/**/*', '!things']` actually matches something, rather than `[]`. You'll learn about the details of pattern matching with `glob` in the appendix.

  [1]: https://f.cloud.github.com/assets/934293/1867380/d53e3f66-784d-11e3-9606-b96bf665f95e.png
