var test = require('tape');
var sinon = require('sinon');
var proxyquire = require('proxyquire');
var user = {
  id: 123,
  name: 'Marian',
  email: 'marian@company.com'
};
var mapperMock = {
  './models/User.js': {
    findOne: function (query, done) {
      setTimeout(done.bind(null, null, user));
    }
  }
};

test('user mapper returns a subset of user', function (t) {
  // Arrange
  var mapper = proxyquire('../src/mapper.js', mapperMock);
  var clock = sinon.useFakeTimers();
  var cb = sinon.spy();

  // Act
  mapper(123, cb);
  clock.tick(0);

  // Assert
  t.plan(2);
  t.ok(cb.called);
  t.ok(cb.calledWith(null, sinon.match(function (val) {
    return val.name && val.email && !val.id;
  })));
});
