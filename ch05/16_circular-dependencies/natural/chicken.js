'use strict';

var egg = require('./egg.js');

function born (chick) {
  process.stdout.write('a small chicken is born!\n');
}

module.exports = {
  create: function () {
    return egg.hatch(born);
  }
};
