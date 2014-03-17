var test = require('tape');
var sinon = require('sinon');

test('qotd service should make an XHR call', function (t) {
  var requests = [];
  var quote = require('../src/qotdService.js');
  var cb = sinon.spy();

  var server = sinon.fakeServer.create();

  quote(cb);

  t.plan(4);
  t.equals(server.requests.length, 1);
  t.ok(cb.notCalled);

  server.requests[0].respond(200, {}, 'foo');

  t.ok(cb.called);
  t.ok(cb.calledWith(sinon.match.string));
});
