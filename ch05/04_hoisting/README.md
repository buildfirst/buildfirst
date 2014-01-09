# Variable Hoisting

> A large number of JavaScript interview questions, if not most of them, can be answered with an understanding of scoping, how `this` works, and hoisting.

```js
var value = 2;

test();

function test () {
    console.log(typeof value);
    console.log(value);
    var value = 3;
}
```

You might be expecting the method to print `'number'` first, and `2` afterwards, or maybe `3`? Try running it! Why does it print `'undefined'` and then `undefined`? Well, hello hoisting! It'll be easier for you to picture it if I re-arrange the code to how it ends up after _hoisting_ takes place. Let's have a look.

```js
var value;

function test () {
    var value;
    console.log(typeof value);
    console.log(value);
    value = 3;
}

value = 2;

test();
```

So, that's why: the `value` declaration at the end of the `test` function actually got hoisted to the top of the scope, and also the reason why `test` didn't meet us with a `TypeError` exception warning us about `undefined` not being a function. Keep in mind that if we used the variable form of declaring the `test` function, we would in fact have gotten that error, because although `var test` would've been hoisted, the assignment wouldn't have been, effectively becoming the following:

```js
var value;
var test;

value = 2;

test();

test = function () {
    var value;
    console.log(typeof value);
    console.log(value);
    value = 3;
};
```

The above wouldn't work as expected, because `test` isn't defined by the time we want to invoke it.

![hoisting.png][1]

  [1]: http://i.imgur.com/eGT7oTe.png "Variable hoisting in action"
