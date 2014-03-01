function delay (t) {
  function wait (resolve) {
    setTimeout(function () {
      resolve();
    }, t);
  }
  return new Promise(wait);
}

Promise
  .all([delay(700), delay(300), delay(500)])
  .then(delay(200));
