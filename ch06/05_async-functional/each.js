async.each([2, 5, 6], iterator, done);

function iterator (item, cb) {
  setTimeout(function () {
    if (item % 2 === 0) {
      cb();
    } else {
      cb(new Error('expected divisible by 2'));
    }
  }, 1000 * item);
}

function done (err) {
  // handle the error
}
