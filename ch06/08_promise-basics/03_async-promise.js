var Prom = require('es6-promise').Promise;

var promise = new Prom(function (fulfill, reject) {
  console.log('Pending...');

  setTimeout(function () {
    if (Math.random() < 0.5) {
      fulfill('Good enough.');
    } else {
      reject(new Error('Dice roll failed!'));
    }
  }, 1000);
});

// when the promise is asynchronous
// callbacks which depend on the promise
// won't be executed until the promise is resolved
promise.then(function (result) {
  console.log('Succeeded', result);
}, function (reason) {
  console.log('Rejected', reason);
});
