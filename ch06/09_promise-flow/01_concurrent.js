var Prom = require('es6-promise').Promise;

function delay (t) {
  function wait (fulfill) {
    setTimeout(function () {
      console.log('Resolving after', t);
      fulfill(t);
    }, t);
  }
  return new Prom(wait);
}

Promise
  .all([delay(700), delay(300), delay(500)])
  .then(function (results) {
    return delay(Math.min.apply(Math, results));
  });
