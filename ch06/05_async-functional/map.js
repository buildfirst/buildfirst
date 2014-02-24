var ids = [23, 33, 118];

async.map(ids, transform, done);

function transform (id, complete) {
  http.get('/products/' + id, complete);
}

function done (err, results) {
  // handle the error
  // results[0] is the response for ids[0],
  // results[1] is the response for ids[1],
  // and so on
}
