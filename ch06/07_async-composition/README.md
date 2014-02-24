# Asynchronous Task Composition

Being able to understand task composition is important if you want to develop complex asynchronous code structures without things getting out of hand.

This convoluted example shows how you can run a few tasks, chaining different flow types together, while keeping things somewhat sane.

```js
async.parallel([
  async.apply(async.series, [
    async.apply(async.waterfall, [
      tasks[0],
      tasks[1]
    ]),
    tasks[2]
  ]),
  tasks[3]
], tasks[4]);
```
