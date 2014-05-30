# Promise Flow

Back in sample [**ch06e04** Asynchronous Flow][1], we've looked at concurrent and serial flows using [`async`][2]. Now we'll look at the same topic, but from the point of view of using Promises.

To test these samples out, you'll need to pick one of the options listed below.

- Visit [ES6 Fiddle][fiddle], and paste the examples in there
- Get the [es6-promise][polyfill] polyfill and try them out on your own
- Try them out in Chrome 32+, where Promises are enabled by default

As an example, below is how you can execute promises concurrently and wait on their resolution.

```js
Promise
  .all([delay(700), delay(300), delay(500)])
  .then(function (results) {
    return delay(Math.min.apply(Math, results));
  });
```

Here's the complete list of examples you'll find in this sample.

- [Concurrent Flow][3]
- [Functional Transformations][4]

[fiddle]: http://www.es6fiddle.net/ "ES6 Fiddle Online"
[polyfill]: https://github.com/jakearchibald/es6-promise "ES6 Promise Polyfill by Jake Archibald"
[1]: https://github.com/buildfirst/buildfirst/tree/master/ch06/04_async-flow "Asynchronous Flow Control Sample"
[2]: https://github.com/caolan/async "Async utilities for node and the browser"
[3]: https://github.com/buildfirst/buildfirst/tree/master/ch06/09_promise-flow/01_concurrent.js
[4]: https://github.com/buildfirst/buildfirst/tree/master/ch06/09_promise-flow/02_funcitonal.js
