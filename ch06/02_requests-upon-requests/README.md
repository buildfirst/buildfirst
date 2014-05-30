# Requests Upon Requests

Here is a very common pattern, where we stack asynchronous tasks which are sequential to each other, but which work asynchronously. This example is a continuation of [**ch06e01** Callback Hell][1].

What would you do if your code ended up looking like the snippet below?

```js
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
```

Think about your answer for a moment, and then you can head over to [`2_named-functions.js`][2]. Or just **read [the book][3]!**

  [1]: https://github.com/buildfirst/buildfirst/tree/master/ch06/01_callback-hell "Callback Hell"
  [2]: https://github.com/buildfirst/buildfirst/tree/master/ch06/02_requests-upon-requests/2_named-functions.js "Resolved Nesting"
  [3]: https://github.com/buildfirst/buildfirst "JavaScript Application Design: A Build First Approach"
