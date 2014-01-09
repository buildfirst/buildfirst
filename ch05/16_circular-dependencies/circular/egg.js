'use strict';

var chicken = require('./chicken.js');

module.exports = {
  hatch: function () {
    var chick = {
      type: 'chicken',
      eats: 'food'
    };

    process.stdout.write('Hatching egg...');

    setTimeout(chicken.born.bind(chicken, chick), 2500);
  }
};
