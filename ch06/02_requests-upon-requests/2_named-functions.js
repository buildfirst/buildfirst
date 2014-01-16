function getUser () {
  http.get('/userByEmail', { email: input.email }, getRegions);
}

function getRegions (err, res) {
  if (err) { done(err); return; }
  http.get('/regions', { regionId: res.id }, getClients);
}

function getClients (err, res) {
  if (err) { done(err); return; }
  http.get('/clients', { regions: res.regions }, done);
}

function done (err, res) {
  if (err) { throw err; }
  console.log(res.clients);
}
