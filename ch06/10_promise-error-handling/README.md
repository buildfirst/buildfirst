# Error Handling Promises

Error handling in promises is as easy as registering a callback handler using one of the options below. These are functionally equivalent.

- `.catch(rejected)`
- `.then(undefined, rejected)`

Similarly, rejections are registered in one of the following ways.

- `reject(reason)` is invoked in the callback passed to the Promise constructor
- An error is thrown in either the Promise callback or in a continuation callback (the same is true for both `then`, `catch`)

```js
function delay (t) {
  function wait (resolve, reject) {
    if (t < 1) {
      throw new Error('Delay must be greater than zero.');
    }
    setTimeout(function () {
      console.log('Resolving after', t);
      resolve(t);
    }, t);
  }
  return new Promise(wait);
}

Promise
  .all([delay(0), delay(400)])
  .then(function (result) {
    throw new Error('I dislike the result!');
  })
  .catch(function (err) {
    console.log(err.message);
  });
```

To test this out, you'll need to pick one of the options listed below.

- Visit [ES6 Fiddle][fiddle], and paste the examples in there
- Get the [es6-promise][polyfill] polyfill and try them out on your own
- Try them out in Chrome 32+, where Promises are enabled by default

To check out the example file, [click here][1]. Can you anticipate the outcome, before executing `node example`?

[fiddle]: http://www.es6fiddle.net/ "ES6 Fiddle Online"
[polyfill]: https://github.com/jakearchibald/es6-promise "ES6 Promise Polyfill by Jake Archibald"
[1]: https://github.com/buildfirst/buildfirst/tree/master/ch06/10_promise-error-handling/example.js
