function* fibonacci () {
  var older = 1;
  var old = 0;

  while (true) {
    yield old + older;
    older = old;
    old += older;
  }
}

var iterator = fibonacci();
var i = 10;

while (i--) {
  console.log(iterator.next().value);
}
