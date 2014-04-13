var Backbone = require('backbone');
var ShoppingList = require('../collections/shoppingList.js');
var ShoppingItem = require('../models/shoppingItem.js');
var ListItem = require('./listItem.js');

module.exports = Backbone.View.extend({
  el: '.items',
  initialize: function () {
    var items = [
      new ShoppingItem({ name: 'Banana', amount: 3 }),
      new ShoppingItem({ name: 'Strawberry', amount: 8 }),
      new ShoppingItem({ name: 'Almond', amount: 34 }),
      new ShoppingItem({ name: 'Chocolate Bar', amount: 1 })
    ];
    this.collection = new ShoppingList(items);
    this.collection.on('remove', this.render, this);
    this.collection.on('add', this.render, this);
    this.collection.on('change', this.render, this);
    this.render();
  },
  render: function () {
    this.el.innerHTML = '';
    this.collection.models.forEach(function (model) {
      new ListItem(model);
    });
  },
  events: {
    'click .remove': 'removeItem',
    'click .edit': 'editItem'
  },
  removeItem: function (e) {
    var name = e.target.dataset.name;
    var model = this.collection.findWhere({ name: name });
    this.collection.remove(model);
  },
  editItem: function () {
    throw 'Not implemented exception';
  }
});
