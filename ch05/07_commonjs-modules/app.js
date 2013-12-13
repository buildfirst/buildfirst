// `require` will load the module which is in the path we pass to it.
// the path must be relative to the module we're currently working on
// or, alternatively, a system absolute path (which is rarely used)
var simple = require('./lib/simple.js');

console.log(simple);
// <- 'this is a really simple module'
