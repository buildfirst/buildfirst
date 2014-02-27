var promise = new Promise(function (resolve, reject) {
  if (Math.random() < 0.5) {
    resolve('Good enough.');
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
// promise.then(function (result) {
//   console.log('Succeeded', result);
// });

// note that you can provide just a failure callback
// promise.then(undefined, function (reason) {
//   console.log('Rejected', reason);
// });

