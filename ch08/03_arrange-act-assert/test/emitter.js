var test = require('tape');
var emitter = require('../src/emitter.js');

test('emitter(thing) should be a function', function (t) {
  t.ok(emitter);
  t.ok(typeof emitter === 'function');
  t.end();
});

test('emitter(thing) should always return an object', function (t) {
  // Act
  isEmitter(emitter());
  isEmitter(emitter({}));
  isEmitter(emitter([]));

  function isEmitter (thing) {
    // Assert
    t.ok(thing);
    t.ok(typeof thing.on === 'function');
    t.ok(typeof thing.emit === 'function');
  }

  t.end();
});

test('emitter(thing) should reference the same object', function (t) {
  // Arrange
  var data = { a: 1 };

  // Act
  var thing = emitter(data);

  // Assert
  t.equal(data, thing);
  t.end();
});

test('emitter(thing) should reference the same array', function (t) {
  // Arrange
  var data = [1, 2];

  // Act
  var thing = emitter(data);

  // Assert
  t.equal(data, thing);
  t.end();
});

test('on(type, listener) should attach an event listener', function (t) {
  // Arrange
  var thing = emitter();

  function listener () {}

  // Assert
  t.doesNotThrow(function () {
    // Act
    thing.on('foo', listener);
  });
  t.end();
});

test('on(type, listener) should attach many event listeners to the same event', function (t) {
  // Arrange
  var thing = emitter();

  function listener () {}

  // Assert
  t.doesNotThrow(function () {
    // Act
    thing.on('foo', listener);
    thing.on('foo', listener);
    thing.on('foo', listener);
  });
  t.end();
});

test('emit(type) should emit to the event listeners', function (t) {
  // Arrange
  var thing = emitter();
  var listens = 0;

  function listener () {
    listens++;
  }

  // Act
  thing.on('foo', listener);
  thing.on('foo', listener);
  thing.emit('foo');

  // Assert
  t.equal(listens, 2);
  t.end();
});

test('emit(type) should pass parameters to the event listeners', function (t) {
  // Arrange
  var thing = emitter();
  var listens = 0;

  function listener (context, value) {
    t.equal(arguments.length, 2);
    t.equal(context, thing);
    t.equal(value, 3);
    listens++;
  }

  // Act
  thing.on('foo', listener);
  thing.on('foo', listener);
  thing.emit('foo', thing, 3);

  // Assert
  t.equal(listens, 2);
  t.end();
});
