'use strict';

// implementation

function averageFactory () {
  var sum = 0;
  var count = 0;
  return function (value) {
    sum += value;
    count++;
    return sum / count;
  };
}

// usage

var first = averageFactory();

first(1);
// <- 1

first(3);
// <- 2

var second = averageFactory();

second(8);
// <- 8, because first and second don't share internals

console.log(first(5));
// <- 3, because first and second don't share internals
