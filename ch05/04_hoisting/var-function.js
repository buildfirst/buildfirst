var value = 2;

test();
// <- TypeError: undefined is not a function

var test = function () {
  console.log(typeof value);
  console.log(value);
  var value = 3;
}
