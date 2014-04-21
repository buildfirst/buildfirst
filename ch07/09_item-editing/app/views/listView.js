var base = require('./base.js');
var ShoppingList = require('../collections/shoppingList.js');
var ShoppingItem = require('../models/shoppingItem.js');
var ListItem = require('./listItem.js');

module.exports = base.extend({
  el: '.items',
  initialize: function () {
    var items = [
      new ShoppingItem({ name: 'Banana', amount: 3 }),
      new ShoppingItem({ name: 'Strawberry', amount: 8 }),
      new ShoppingItem({ name: 'Almond', amount: 34 }),
      new ShoppingItem({ name: 'Chocolate Bar', amount: 1 })
    ];
    this.views = {};
    this.collection = new ShoppingList();
    this.collection.on('add', this.addItem, this);
    this.collection.on('remove', this.removeItem, this);
    this.collection.add(items);
  },
  addItem: function (model) {
    var item = new ListItem({
      model: model,
      collection: this.collection
    });
    this.el.appendChild(item.el);
    this.views[model.cid] = item;
  },
  removeItem: function (model) {
    var item = this.views[model.cid];
    this.el.removeChild(item.el);
    delete this.views[model.cid];
  }
});
