var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/list.mu', { encoding: 'utf8' });
var ShoppingList = require('../collections/shoppingList.js');

module.exports = base.extend({
  el: '.view',
  template: template,
  collection: new ShoppingList([
    { name: 'Banana', amount: 3 },
    { name: 'Strawberry', amount: 8 },
    { name: 'Almond', amount: 34 },
    { name: 'Chocolate Bar', amount: 1 }
  ]),
  initialize: function () {
    this.collection.on('remove', this.updateView, this);
    this.updateView();
  },
  updateView: function () {
    this.viewModel = {
      shopping_list: this.collection.toJSON()
    };
    this.render();
  },
  events: {
    'click .remove': 'removeItem'
  },
  removeItem: function (e) {
    var name = e.target.dataset.name;
    var model = this.collection.findWhere({ name: name });
    this.collection.remove(model);
  }
});
