function* even () {
  var n = 0;
  while (true) {
    yield ++n * 2;
  }
}

var iterator = even();
var i = 10;

while (i--) {
  console.log(iterator.next().value);
}
