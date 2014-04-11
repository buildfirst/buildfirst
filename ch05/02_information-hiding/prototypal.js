'use strict';

// implementation

function Average () {
  // publicly accessible on the Average instances
  this.sum = 0;
  this.count = 0;
}

Average.prototype.add = function (value) {
  this.sum += value;
  this.count++;
};

Average.prototype.calc = function () {
  return this.sum / this.count;
};

// usage

var avg = new Average();
avg.add(1);
avg.add(3);

var result = avg.calc();
console.log(result);
// <- 2

// but, we can access the internals!
avg.sum = 8;
result = avg.calc();
console.log(result);
// <- 4
