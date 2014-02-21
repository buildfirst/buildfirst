async.parallel([
  function (next) {
    http.put('/users', user, next);
  },
  function (next) {
    http.get('/users/list', next);
  },
  function (next) {
    view.update(next);
  }
], done);

function done (err, results) {
  // handle error
  updateProfile(results[0]);
  synchronizeFollowers(results[1]);
}
