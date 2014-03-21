var test = require('tape');
var sinon = require('sinon');

test('qotd service should make an XHR call', function (t) {
  var quote = require('../src/qotdService.js');
  var cb = sinon.spy();

  var server = sinon.fakeServer.create();
  var headers = { 'Content-Type': 'text/html' };

  quote(cb);

  t.plan(4);
  t.equals(server.requests.length, 1);
  t.ok(cb.notCalled);

  server.requests[0].respond(200, headers, 'The cake is a lie.');

  t.ok(cb.called);
  t.ok(cb.calledWith(null, sinon.match.string));
});
