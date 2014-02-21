var numbers;

async.series([
  function (next) {
    numbers = [1,2,3];
    next();
  },
  function (next) {
    console.log(numbers);
    next();
  }
], done);

function done (err, results) {
  // handle error
  updateProfile(results[0]);
  synchronizeFollowers(results[1]);
}
