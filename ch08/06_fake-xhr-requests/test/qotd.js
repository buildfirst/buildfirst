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
  t.ok(cb.notCalled, 'not called before response');

  server.requests[0].respond(200, headers, 'The cake is a lie.');

  t.ok(cb.called, 'called after response');
  t.ok(cb.calledWith(null, 'The cake is a lie.'), 'response is expected');
});
