'use strict';

// Rather than depending on a module circularly, sometimes we
// can simply pass the references we need, rather than explicitly
// requiring them.
module.exports = {
  hatch: function (done) {
    var chick = {
      type: 'chicken',
      eats: 'food'
    };

    process.stdout.write('Hatching egg...');

    setTimeout(done.bind(null, chick), 2500);
  }
};
