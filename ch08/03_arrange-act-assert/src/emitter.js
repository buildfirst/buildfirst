module.exports = function (thing) {
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
    var evt = events[type];
    if (!evt) {
      return;
    }
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < evt.length; i++) {
      evt[i].apply(thing, args);
    }
  };

  return thing;
};
