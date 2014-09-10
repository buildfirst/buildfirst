var Prom = require('es6-promise').Promise;

var promise = new Prom(function (fulfill, reject) {
  if (Math.random() < 0.5) {
    fulfill('Good enough.');
  } else {
    reject(new Error('Dice roll failed!'));
  }
});

promise.then(function (result) {
  console.log('Succeeded', result);
}, function (reason) {
  console.log('Rejected', reason);
});

// note that you can provide just a success callback
promise.then(function (result) {
  console.log('Only succeeded', result);
});

// note that you can provide just a failure callback
promise.then(undefined, function (reason) {
  console.log('Only rejected', reason);
});

// `promise.catch(cb)` is an alias for `promise.then(undefined, cb)`
promise.catch(function (reason) {
  console.log('Just rejected', reason);
});

