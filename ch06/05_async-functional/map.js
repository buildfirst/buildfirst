var ids = [23, 33, 118];

async.map(ids, transform, done);

function transform (id, complete) {
  http.get('/products/' + id + '/related', complete);
}

function done (err, related) {
  // handle the error
  // related[0] is the produce of ids[0],
  // related[1] is the produce of ids[1],
  // and so on
}
