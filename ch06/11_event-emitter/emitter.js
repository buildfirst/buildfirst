function emitter (thing) {
  var events = {};

  if (!thing) {
    thing = {};
  }

  thing.on = function (type, listener) {
    if (!events[type]) {
      events[type] = [listener];
    } else {
      events[type].push(listener);
    }
  };

  thing.emit = function (type) {
    if (!events[type]) {
      return;
    }
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < events[type].length; i++) {
      debounce(events[type][i]);
    }
    function debounce (e) {
      setTimeout(function () {
        e.apply(thing, args);
      }, 0);
    }
  };

  return thing;
}

module.exports = emitter;
