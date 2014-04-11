var $ = require('jquery');
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
    this.collection.on('remove', this.updateView, this);
    this.collection.on('add', this.updateView, this);
    this.collection.on('change', this.updateView, this);
    this.collection.on('invalid', this.updateViewValidated, this);
    this.updateView();
  },
  updateView: function () {
    this.updateViewValidated(this.collection);
  },
  updateViewValidated: function (collection, error) {
    var i = 0;
    this.model = {
      error: error,
      shopping_list: collection.toJSON(),
      autoincrement: function () {
        return i++;
      }
    };
    this.render();
  },
  events: {
    'click .remove': 'removeItem',
    'click .add': 'addItem'
  },
  removeItem: function (e) {
    var index = e.target.dataset.index;
    var model = this.collection.at(index);
    this.collection.remove(model);
  },
  addItem: function () {
    var name = this.$('.name').val();
    var amount = parseInt(this.$('.amount').val(), 10);
    var model = this.collection.findWhere({ name: name });
    if (model) {
      model.addToOrder(amount);
    } else {
      model = { name: name, amount: amount };
      this.collection.add(model, { validate: true });
    }
  }
});
