var value = 2;

test();
// <- 'undefined'
// <- undefined

function test () {
  console.log(typeof value);
  console.log(value);

  var value = 3; // jshint ignore:line
}
