var manipulate = require('./manipulate.js');
var things = { a: 1, b: 2, c: 3, d: 4 };
var result = manipulate(things);

console.log(result);
// <- [1, 2, 3, 4]
