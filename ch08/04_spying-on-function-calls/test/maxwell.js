var test = require('tape');
var sinon = require('sinon');
var maxwell = require('../src/maxwell.js');

test('maxwell.immediate invokes a callback immediately', function (t) {
  var cb = sinon.spy();

  maxwell.immediate(cb);

  t.plan(2);
  t.ok(cb.calledOnce);
  t.ok(cb.calledWith('foo', 'bar'));
});

test('maxwell.debounce invokes a callback after a timeout', function (t) {
  var clock = sinon.useFakeTimers();
  var cb = sinon.spy();

  maxwell.debounce(cb);

  t.plan(2);
  t.ok(cb.notCalled, 'not called until tick');
  clock.tick(0);
  t.ok(cb.called, 'called after tick');
});
