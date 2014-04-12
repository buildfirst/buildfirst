var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/listItem.mu', { encoding: 'utf8' });
var ShoppingItem = require('../models/shoppingItem.js');

module.exports = base(template).extend({
  el: '.items',
  initialize: function (model) {
    this.model = model.toJSON();
    this.render();
  console.log('meh', this.model);
  }
});
