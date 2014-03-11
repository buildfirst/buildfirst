# ES6 Generator Basics

![es6.png][5]

To run the generator examples, you should get Node [`v0.11.x` or later][4], which you can easily fetch, install, and use, with [nvm][1]. Then, you must pass the `--harmony` flag to the `node` CLI when executing a script, that'll enable ES6 features such as generators, including the `function* ()` construct, the `yield` keyword, and the `for..of` construct.

The [`even-stream`][2] example shows how to use a generator to represent an infinite sequence, and how to loop through some of its values.

```js
node --harmony 01_even-stream
```

The [`for-of`][3] example shows how to use the `for..of` construct to loop over the results of a iterating over a generator.

```js
node --harmony 02_for-of
```

[1]: https://github.com/creationix/nvm
[2]: https://github.com/bevacqua/buildfirst/tree/master/ch06/12_generator-basics/01_even-stream.js
[3]: https://github.com/bevacqua/buildfirst/tree/master/ch06/12_generator-basics/02_for-of.js
[4]: http://nodejs.org/dist
[5]: https://raw.github.com/bevacqua/buildfirst/master/images/es6.png
