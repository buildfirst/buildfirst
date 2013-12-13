// `require` will load the module which is in the path we pass to it.
// the path must be relative to the module we're currently working on
// or, alternatively, a system absolute path (which is rarely used)
var text = require('./lib/text.js');
var result = text('foo bar');

console.log(result);
