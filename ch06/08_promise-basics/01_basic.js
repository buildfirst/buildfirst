var Promise = require('es6-promise').Promise;

var promise = new Promise(function (fulfill, reject) {
  if (Math.random() < 0.5) {
    fulfill('Good enough.');
  } else {
    reject(new Error('Dice roll failed!'));
  }
});
