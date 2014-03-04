var Promise = require('es6-promise').Promise;

var promise = new Promise(function (resolve, reject) {
  if (Math.random() < 0.5) {
    resolve('Good enough.');
  } else {
    reject(new Error('Dice roll failed!'));
  }
});
