var value = 2;

work();
// <- TypeError: undefined is not a function

var work = function () {
  console.log(typeof value);
  console.log(value);
  var value = 3;
}
