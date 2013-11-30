# Single Responsibility Principle

Writing _orthogonal_ functions which don't overlap with each other is an important property of clean applications. Functions which overlay with each other usually mean not only writing extra code, but also become harder to maintain, combine, and test. As such, this example gathers a list of features we might've coded into a single function, but instead splits each responsibility into its own method.

The function we needed was to build a slug out a regular text string, and then also filter out irrelevant words, and converting it into a time-stamped URL. To test the function, we chose to use `'... Foo Some   Poorly Worded----   -  Text-?'` as input. In this case the output is expected to be `'/1385757733922/poorly-worded-text'`.

> If you're reading this before embarking onto Chapter 5, take some time and try to implement it yourself before glancing over at the code! Then, you can check how you did.

To run the test example, simply execute:

```js
node app
```

Skipping ahead to _separation of concerns through modules_, we could further separate our code by putting each function in its own file. Then, loading each one would be just a matter of doing `require(file)`, where `file` is the relative path to. You should check out `sluggish.js` to see [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1 "CommonJS Modules/1.1") module loading in action. Of course, this might not be very useful thing to do, since our code is currently pretty compact, and it wouldn't be hard to follow it in a single file.

```js
node sluggish
```

![overpower.gif][1]

In conclusion, we should avoid cramming too much responsibility in each piece of our code-base. It doesn't matter how big or small the piece is. We could be talking about a line of code, a method, a module, a package, a project, a solution, or an entire system, and the same principle would hold true.

> Each piece of code should have a single, **well-defined responsibility**. Moreover, that responsibility should present **a single point of entry**, rather than being all over the place.

A single point of entry also means our code will be easier to maintain, and also to refactor, since _we'll have better control_ over who or what is consuming a particular service or API.

  [1]: http://i.imgur.com/NWu2P5e.gif "Over-powered isn't always this awesome"
