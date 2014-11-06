var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/list.mu', { encoding: 'utf8' });

module.exports = base.extend({
  el: '.view',
  template: template,
  viewModel: {
    shopping_list: [
      { name: 'Banana', quantity: 3 },
      { name: 'Strawberry', quantity: 8 },
      { name: 'Almond', quantity: 34 },
      { name: 'Chocolate Bar', quantity: 1 }
    ]
  },
  initialize: function () {
    this.render();
  }
});
