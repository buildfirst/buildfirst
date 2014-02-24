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

You can find a similar example on CodePen, which uses an [alternative asynchronous flow control library which I developed, **contra**][1].

[Check the example live on CodePen][2]

  [1]: https://github.com/bevacqua/contra "Asynchronous flow control with a functional taste to it"
  [2]: http://codepen.io/bevacqua/pen/FeCAr "Contra in action"
