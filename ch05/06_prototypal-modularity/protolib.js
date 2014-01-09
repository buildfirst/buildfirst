// Still using an IIFE to expose the library!
(function(window){
  // use these to sign each instance and access its private scope
  var lastId = 0;
  var data = {};

  function Lib () {
    // get a unique id to access the private data
    var id = ++lastId;

    // freeze the id, so it can't be manipulated
    Object.defineProperty(this, '_id', {
      value: id
    });

    // init my instance's private data
    data[this._id] = {
      state: 'idle'
    };

    // init accessible data
    this.delay = 3000;
  };

  Lib.prototype.version = '0.0.1';

  Lib.prototype.waitForNoReason = function (method) {

    data[this._id].state = 'waiting';

    // remember we talked about `.bind`?
    // `then` wouldn't have a reference to the instance of Lib in `this`, otherwise
    // rather, either the global object, or `null`, would be assigned to `this`.
    window.setTimeout(then.bind(this), this.delay);

    function then () {
      data[this._id].state = 'executing';

      // remember, `.bind` helped us pick the value for `this`
      var update = done.bind(this);

      // call their method with a callback, which notifies us when they're done
      method(update);
    }
  };

  // since we're in a closure, this will stay private
  function done () {
    data[this._id].state = 'done';
  }

  Lib.prototype.getState = function () {
    return data[this._id].state;
  };

  // expose it
  window.Lib = Lib;

})(window);

// get an instance
var instance = new Lib();

// the _id property isn't writable
instance._id = 30;

console.log(instance._id);
// <- 1

console.log(instance.version);
// <- '0.0.1'

// some properties can be made accessible, on a need-know basis
console.log(instance.delay);
// <- 3000

console.log(instance.getState());
// <- 'idle'

// use the public method
// our callback function gets called 3s later
instance.waitForNoReason(function (done) {

  console.log(instance.getState());
  // <- 'executing'

  done();

  console.log(instance.getState());
  // <- 'done'

});

console.log(instance.getState());
// <- 'waiting'
