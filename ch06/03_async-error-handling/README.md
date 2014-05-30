# Asynchronous Error Handling

This example is a continuation of [**ch06e02** Requests Upon Requests][1]. Improving code readability is hard, but it sometimes can be assisted by sprinkling a little syntactic sugar on top of your function calls.

The following statement shows up pretty much everywhere, to deal with error handling appropriately.

```js
if (err) { done(err); return; }
```

Of course, there is a better way, a saner way. That is, using some kind of asynchronous flow control library. Here I created my own, [`flow`][2], just for demonstration purposes. The resulting code gets rid of `err` handlers, as well as the `err` arguments in any of the steps in the series, but it still provides the error, if any, to the `done` callback, so that you can do something appropriate about it.

```js
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
  if (err) {
    throw err;
  }
  console.log(res.clients);
}
```

  [1]: https://github.com/buildfirst/buildfirst/tree/master/ch06/02_requests-upon-requests "Requests Upon Requests"
  [2]: https://github.com/buildfirst/buildfirst/tree/master/ch06/03_async-error-handling/flow.js "Example Flow Control Method"
