# Context Scoping

One of the most challenging tasks we have to undertake in our quest to become expert JavaScripters is developing an understanding of _how scoping works_, how to manipulate the `this` keyword, and actually being able to tell what the value of `this` will be in a given call stack. In section `5.1.3` we talk about scopes, `this`, the `.apply`, `.call`, and `.bind` methods, as well as the `new` operator.

- [Scoping `this`][1]
- [Object Property][2]
- [Manipulating `this`][3]

![chaos.gif][4]

## [Call, Apply, Bind][3]

- `Function.prototype.call` takes any number of arguments, the first one is assigned to `this`, and the rest are passed as arguments to the function that's being invoked.

- `Function.prototype.apply` behaves very similarly to `.call`, but it takes the arguments as a single array with every value, instead of any number of parameter values.

- `Function.prototype.bind` creates a special function which can be used to invoke the function it is called on. That function will always use the `this` argument passed to `.bind`, as well as being able to assign a few arguments, creating a curried version of the original function.

## That `strict` mode

If our code is running in strict mode, then `this` will default to `undefined`, instead of `Window`. Outside of strict mode, `this` is always an object: the provided object if called with an object reference; its boxed representation if called with a primitive boolean, string, or numeric value; or the global object (again, `undefined` under strict mode) if called with either `undefined` or `null`. The value passed as `this` to a function in strict mode isn't boxed into an object.

You can read more about **strict mode** [_inside the book_][5], and MDN also has [a nice write-up on the subject][6] you might want to check out!

## Order Matters

JavaScript variables fill the scope in the order described below.

- Scope context variables: `this`, and `arguments`
- Named function parameters: `function (these, variable, names)`
- Function expressions: `function something () {}`
- Local scope variables: `var foo`

_More information about this topic_ can be found on a blog post I wrote: [Where does this keyword come from?][7]

  [1]: https://github.com/buildfirst/buildfirst/tree/master/ch05/03_context-scoping/scope-this.js
  [2]: https://github.com/buildfirst/buildfirst/tree/master/ch05/03_context-scoping/object-property.js
  [3]: https://github.com/buildfirst/buildfirst/tree/master/ch05/03_context-scoping/call-apply-bind.js
  [4]: https://raw.github.com/buildfirst/buildfirst/master/images/chaos.gif "Not the prettiest of JavaScript faces"
  [5]: http://bevacqua.io/buildfirst "JavaScript Application Design"
  [6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this "this on MDN"
  [7]: http://blog.ponyfoo.com/2013/12/04/where-does-this-keyword-come-from "Where does this keyword come from? on Pony Foo"
