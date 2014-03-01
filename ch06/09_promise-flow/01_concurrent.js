function delay (t) {
  function wait (resolve) {
    setTimeout(function () {
      console.log('Resolving after', t);
      resolve();
    }, t);
  }
  return new Promise(wait);
}

Promise
  .all([delay(700), delay(300), delay(500)])
  .then(function () {
    return delay(200);
  });
