# Context Scoping

One of the most challenging tasks we have to undertake in our quest to become expert JavaScripters is developing an understanding of _how scoping works_, how to manipulate the `this` keyword, and actually being able to tell what the value of `this` will be in a given call stack. In section `5.1.3` we talk about scopes, `this`, the `.apply`, `.call`, and `.bind` methods, as well as the `new` operator.

- [Scope Inheritance](https://github.com/bevacqua/buildfirst/tree/master/ch05/03_context-scoping/scope-inheritance.js)
- [Object Property](https://github.com/bevacqua/buildfirst/tree/master/ch05/03_context-scoping/object-property.js)

#### [Call, Apply, Bind](https://github.com/bevacqua/buildfirst/tree/master/ch05/03_context-scoping/call-apply-bind.js)

- `Function.prototype.call` takes any number of arguments, the first one is assigned to `this`, and the rest are passed as arguments to the function that's being invoked.

- `Function.prototype.apply` behaves very similarly to `.call`, but it takes the arguments as a single array with every value, instead of any number of parameter values.

- `Function.prototype.bind` creates a special function which can be used to invoke the function it is called on. That function will always use the `this` argument passed to `.bind`, as well as being able to assign a few arguments, creating a curried version of the original function.

![chaos.png][1]

  [1]: "Not the prettiest of JavaScript faces"
