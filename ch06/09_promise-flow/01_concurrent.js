var Promise = require('es6-promise').Promise;

function delay (t) {
  function wait (resolve) {
    setTimeout(function () {
      console.log('Resolving after', t);
      resolve(t);
    }, t);
  }
  return new Promise(wait);
}

Promise
  .all([delay(700), delay(300), delay(500)])
  .then(function (results) {
    return delay(Math.min.apply(Math, results));
  });
