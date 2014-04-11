var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/listView.mu', { encoding: 'utf8' });
var ShoppingList = require('../collections/shoppingList.js');
var ShoppingItem = require('../models/shoppingItem.js');

module.exports = base(template).extend({
  el: '.list',
  initialize: function () {
    var items = [
      new ShoppingItem({ name: 'Banana', amount: 3 }),
      new ShoppingItem({ name: 'Strawberry', amount: 8 }),
      new ShoppingItem({ name: 'Almond', amount: 34 }),
      new ShoppingItem({ name: 'Chocolate Bar', amount: 1 })
    ];
    this.collection = new ShoppingList(items);
    this.collection.on('remove', this.updateModel, this);
    this.updateModel();
  },
  updateModel: function () {
    var i = 0;

    this.model = {
      shopping_list: this.collection.toJSON(),
      autoincrement: function () {
        return i++;
      }
    };
    this.render();
  },
  events: {
    'click .remove': 'removeItem'
  },
  removeItem: function (e) {
    var index = e.target.dataset.index;
    var model = this.collection.at(index);
    this.collection.remove(model);
  }
});
