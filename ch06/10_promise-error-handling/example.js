var Prom = require('es6-promise').Promise;

function delay (t) {
  function wait (fulfill, reject) {
    if (t < 1) {
      throw new Error('Delay must be greater than zero.');
    }
    setTimeout(function () {
      console.log('Resolving after', t);
      fulfill(t);
    }, t);
  }
  return new Prom(wait);
}

Promise
  .all([delay(0), delay(400)])
  .then(function (result) {
    throw new Error('I dislike the result!');
  })
  .catch(function (err) {
    console.log(err.message);
  });
