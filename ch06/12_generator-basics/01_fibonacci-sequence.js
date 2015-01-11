function* fibonacci () {
  var older = 0;
  var old = 1;

  while (true) {
    yield old + older;
    var next = older + old;
    older = old;
    old = next;
  }
}

var iterator = fibonacci();
var i = 10;

while (i--) {
  console.log(iterator.next().value);
}

// <- [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
