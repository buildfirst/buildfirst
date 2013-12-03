# Variable Hoisting

> A large number of JavaScript interview questions, if not most of them, can be answered with an understanding of scoping, how `this` works, and hoisting.

```js
var value = 2;

work();

function work () {
    console.log(typeof value);
    console.log(value);
    var value = 3;
}
```

You might be expecting the method to print 'number' first, and 2 afterwards, or maybe 3? Try running it! Why does it print `'undefined'` and then `undefined`? Well, hello hoisting! It'll be easier for you to picture it if I re-arrange the code to how it ends up after hoisting takes place. Let's have a look.

```js
var value;

function work () {
    var value;
    console.log(typeof value);
    console.log(value);
    value = 3;
}

value = 2;

work();
```

So, that's why: the `value` declaration at the end of the `work` function actually got hoisted to the top of the scope, and also the reason why `work` didn't meet us with a `TypeError` exception warning us about `undefined` not being a function. Keep in mind that if we used the variable form of declaring the `work` function, we would in fact have gotten that error, because although `var work` would've been hoisted, the assignment wouldn't have been, effectively becoming the following:

```js
var value;
var work;

value = 2;

work();

work = function () {
    var value;
    console.log(typeof value);
    console.log(value);
    value = 3;
};
```

The above wouldn't work as expected, because work isn't defined by the time we want to invoke it. At this point you should feel pretty comfortable with scopes and the `this` keyword. It's time to talk about closures, and modular patterns in JavaScript.

Look at the scripts in this directory for a few more examples. JavaScript variables fill a particular scope in the order described below.

- Scope context variables: `this`, and `arguments`
- Named function parameters: `function (these, variable, names)`
- Function expressions: `function something () {}`
- Local scope variables: `var foo`
