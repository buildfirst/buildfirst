var assert = require('assert');
var emitter = require('../src/emitter.js');

describe('emitter(thing)', function () {
  it('should be a function', function () {
    assert.ok(emitter);
    assert.ok(typeof emitter === 'function');
  });

  it('should always return an object', function () {
    // Act
    isEmitter(emitter());
    isEmitter(emitter({}));
    isEmitter(emitter([]));

    function isEmitter (thing) {
      // Assert
      assert.ok(thing);
      assert.ok(typeof thing.on === 'function');
      assert.ok(typeof thing.emit === 'function');
    }
  });

  it('should reference the same object', function () {
    // Arrange
    var data = { a: 1 };

    // Act
    var thing = emitter(data);

    // Assert
    assert.equal(data, thing);
  });

  it('should reference the same array', function () {
    // Arrange
    var data = [1, 2];

    // Act
    var thing = emitter(data);

    // Assert
    assert.equal(data, thing);
  });
});

describe('on(type, listener)', function () {
  it('should attach an event listener', function () {
    // Arrange
    var thing = emitter();

    function listener () {}

    // Act
    thing.on('foo', listener);
  });

  it('should attach many event listeners to the same event', function () {
    // Arrange
    var thing = emitter();

    function listener () {}

    // Act
    thing.on('foo', listener);
    thing.on('foo', listener);
    thing.on('foo', listener);
  });
});

describe('emit(type)', function () {
  it('should emit to the event listeners', function () {
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
    assert.equal(listens, 2);
  });

  it('should pass parameters to the event listeners', function () {
    // Arrange
    var thing = emitter();
    var listens = 0;

    function listener (context) {
      assert.equal(context, thing);
      listens++;
    }

    // Act
    thing.on('foo', listener);
    thing.on('foo', listener);
    thing.emit('foo', thing);

    // Assert
    assert.equal(listens, 2);
  });
});
