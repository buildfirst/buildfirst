http.get('/userByEmail', { email: input.email }, function (err, res) {
  if (err) { done(err); return; }

  http.get('/regions', { regionId: res.id }, function (err, res) {
    if (err) { done(err); return; }

    http.get('/clients', { regions: res.regions }, function (err, res) {
      done(err, res);
    });
  });
});

function done (err, res) {
  if (err) { throw err; }
  console.log(res.clients);
}
