flow([getUser, getRegions, getClients], done);

function getUser (next) {
  http.get('/userByEmail', { email: input.email }, next);
}

function getRegions (res, next) {
  http.get('/regions', { regionId: res.id }, next);
}

function getClients (res, next) {
  http.get('/clients', { regions: res.regions }, next);
}

function done (err, res) {
  if (err) { throw err; }
  console.log(res.clients);
}
