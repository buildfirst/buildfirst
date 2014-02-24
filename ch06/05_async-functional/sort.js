async.sortBy([1, 23, 54], sort, done);

function sort (id, sorted) {
  http.get('/products/' + id, function (err, product) {
    sorted(err, product ? product.name : null);
  });
}

function done (err, result) {
    // handle the error
  // result contains ids sorted by name
}
