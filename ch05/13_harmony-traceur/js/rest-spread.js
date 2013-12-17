function pushRest (to, ...items) {
  items.forEach(function (item) {
    to.push(item);
  });
}

var r1 = ['a'];
pushRest(r1, 'b', 'c', 'd', 'e');
console.log(r1);
// <- ['a', 'b', 'c', 'd', 'e']


function pushRestSpread(to, ...items) {
  to.push(...items);
}

var r2 = ['a'];
pushRestSpread(r2, 'b', 'c', 'd', 'e');
console.log(r2);
// <- ['a', 'b', 'c', 'd', 'e']


// also works in arrays
var a = [1];
var b = [2, 3, 4];
var c = [6, 7];
var d = [0, ...a, ...b, 5, ...c];

console.log(d);
// <- [0, 1, 2, 3, 4, 5, 6, 7]
