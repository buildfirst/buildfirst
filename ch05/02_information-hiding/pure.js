'use strict';

// implementation

function average (values) {

  // Array.prototype.reduce iterates over an array calling an accumulating function
  // we can use this function to sum all the values in the array in a semantic fashion.
  var sum = values.reduce(function (accumulator, value) {
    return accumulator + value;
  }, 0);

  return sum / values.length;
}

// usage

var avg = average([1,3]);
console.log(avg);
// <- 2
