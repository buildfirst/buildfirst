var Promise = require('es6-promise').Promise;

function delay (t) {
  function wait (resolve, reject) {
    if (t < 1) {
      throw new Error('Delay must be greater than zero.');
    }
    setTimeout(function () {
      console.log('Resolving after', t);
      resolve(t);
    }, t);
  }
  return new Promise(wait);
}

Promise
  .all([delay(0), delay(400)])
  .then(function (result) {
    throw new Error('I dislike the result!');
  })
  .catch(function (err) {
    console.log(err.message);
  });
