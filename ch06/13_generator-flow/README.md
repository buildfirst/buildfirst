# Asynchronicity and Generators

![es6.png][1]

To run the generator examples, you should get Node [`v0.11.x` or later][2], which you can easily fetch, install, and use, with [nvm][3]. Then, you must pass the `--harmony` flag to the `node` CLI when executing a script, that'll enable ES6 features such as generators, including the `function* ()` construct, the `yield` keyword, and the `for..of` construct. Alternatively you could try them on the [es6fiddle][5] site online.

```js
node --harmony usage
```

Here is how you could use a generator function to easily mix and match synchronous and asynchronous flows.

```js
function get (next) {
  setTimeout(function () {
    next(null, ['bacon', 'lettuce', 'crispy bacon']);
  }, 1000);
}

flow(function* (next) {
  console.log('fetching food types...');
  var types = yield get;
  console.log('waiting around...');
  yield setTimeout(next, 2000);
  console.log(types.join(', '));
});
```

The [`flow`][4] method is a quite a bit commented, to help you figure out how it is implemented, so I suggest you check that out if you're struggling with the explanation found on the book.

[1]: https://raw.github.com/buildfirst/buildfirst/master/images/es6.png
[2]: http://nodejs.org/dist
[3]: https://github.com/creationix/nvm
[4]: https://github.com/buildfirst/buildfirst/tree/master/ch06/13_generator-flow/flow.js
[5]: http://es6fiddle.com
