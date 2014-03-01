# Promise Flow

Back in sample [**ch06e04** Asynchronous Flow][1], we've looked at concurrent and serial flows using [`async`][2].

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

[1]: https://github.com/bevacqua/buildfirst/tree/master/ch06/04_async-flow "Asynchronous Flow Control Sample"
[2]: https://github.com/caolan/async "Async utilities for node and the browser"
[3]: https://github.com/bevacqua/buildfirst/tree/master/ch06/09_promise-flow/01_concurrent.js
[4]: https://github.com/bevacqua/buildfirst/tree/master/ch06/09_promise-flow/02_funcitonal.js
