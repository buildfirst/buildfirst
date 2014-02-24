# Asynchronous Queues

> `async.queue` will create a queue object which can be used to run tasks, in series or concurrently. It takes two arguments, the worker function, which will take a task object and a callback to signal that the work is complete; and the concurrency level, which determines how many tasks can run at any given moment. If the concurrency level is `1`, we're effectively turning the queue into a series, executing tasks as the previous one ends.

Using queues can be useful in a number of ways, particularly if you need to set a concurrency cap other than serial, or `1`.

This quick example demonstrates how to implement an asynchronous queue using the [`async`][1] control flow library.

```js
var async = require('async');
var q = async.queue(worker, 1);

function worker (id, done) {
  setTimeout(function () {
    console.log('Did something with id', id);
    done();
  }, 500);
}

q.push([13,12,5,135]);
```

The nicety is that you can push more tasks at different points in time, and it'll still work. In contrast, `parallel` or `series` are one-shot operations, where you can't just add tasks to the list at a later time.

  [1]: https://github.com/caolan/async "Async utilities for node and the browser"
