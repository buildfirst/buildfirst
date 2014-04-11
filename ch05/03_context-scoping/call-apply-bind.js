//`Function.prototype.call` takes any number of arguments, the first
// one is assigned to `this`, and the rest are passed as arguments
// to the function that's being invoked.

Array.prototype.slice.call([1, 2, 3], 1, 2);
// <- [2]

// `Function.prototype.apply` behaves very similarly to `.call`,
// but it takes the arguments as a single array with every value,
// instead of any number of parameter values.

String.prototype.split.apply('13.12.02', ['.']);
// <- ['13', '12', '02']

// `Function.prototype.bind` creates a special function which can be used to invoke
// the function it is originally called on. That function will always use the `this`
// argument passed to `.bind` as its context, as well as being able to assign a few
// arguments, creating a curried version of the original function.

var arr = [1, 2];
var add = Array.prototype.push.bind(arr, 3);

// effectively the same as arr.push(3)
add();

// effectively the same as arr.push(3, 4)
add(4);

console.log(arr);
// <- [1, 2, 3, 3, 4]
