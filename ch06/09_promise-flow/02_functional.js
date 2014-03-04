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
    return results.filter(function (result) {
      return result > 400;
    });
  })
  .then(function (results) {
    return results.sort(function (a, b) {
      return a - b;
    });
  })
  .then(function (results) {
    console.log(results);
    // <- [500, 700]
  });
