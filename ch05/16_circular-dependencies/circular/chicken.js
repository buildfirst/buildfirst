'use strict';

module.exports = {
  born: function (chick) {
    process.stdout.write('a small chicken is born!\n');
  }
};

// Note that at the time you require a module, the rest of
// this module (chicken) won't be interpreted yet, so the
// `module.exports.create` variable won't be defined.
// In fact, that's the very reason we moved the born function to the top
// So that the egg module can access it.
var egg = require('./egg.js');

module.exports.create = function () {
  return egg.hatch();
};
