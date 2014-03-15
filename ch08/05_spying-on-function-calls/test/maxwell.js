var test = require('tape');
var sinon = require('sinon');
var maxwell = require('../src/maxwell.js');

test('maxwell.immediate invokes a callback immediately', function (t) {
  t.plan(1);

  var spy = sinon.spy();

  maxwell.immediate(spy);

  t.ok(spy.calledOnce);
});

test('maxwell.debounce invokes a callback after a timeout', function (t) {
  t.plan(2);

  var clock = sinon.useFakeTimers();
  var spy = sinon.spy();

  maxwell.debounce(spy);

  t.ok(spy.notCalled);
  clock.tick(0);
  t.ok(spy.called);
});
