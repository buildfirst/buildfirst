# Mocking Your Dependencies

Mocking dependencies which are arguments to a function is really trivial in JavaScript tests, you just make up any objects you need! Mocking dependencies which are imported with a `require()` call is a bit trickier, but it's still perfectly doable without making any changes to your source code.

Consider the example below.

```js
var User = require('./models/User.js');

function subset (user) {
  return {
    name: user.name,
    email: user.email
  };
}

module.exports = function (id, done) {
  User.findOne({ id: id }, function (err, user) {
    done(err, user ? subset(user) : null);
  });
};
```

In [the tests][2], I use `proxyquire` to resolve a fake version of the `model` which would normally query the database. In the tests it just calls back a function, passing a made-up model object.

```shell
node test/mapper
```

![tape-proxy.png][1]

[1]: https://raw.github.com/bevacqua/buildfirst/master/images/tape-proxy.png "Mocking with proxyquire"
[2]: https://raw.github.com/bevacqua/buildfirst/master/ch08/05_mocking-your-dependencies/test/mapper.js
