var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/list.mu', { encoding: 'utf8' });
var ShoppingList = require('../collections/shoppingList.js');
var ShoppingItem = require('../models/shoppingItem.js');

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
    this.collection.on('add', this.updateView, this);
    this.collection.on('remove', this.updateView, this);
    this.collection.on('change', this.updateView, this);
    this.updateView();
  },
  updateView: function (data) {
    data = data || {};

    this.viewModel = {
      shopping_list: this.collection.toJSON(),
      error: data.error,
      name: data.name,
      amount: data.amount
    };
    this.render();
  },
  events: {
    'click .remove': 'removeItem',
    'click .add': 'addItem'
  },
  removeItem: function (e) {
    var name = e.target.dataset.name;
    var model = this.collection.findWhere({ name: name });
    this.collection.remove(model);
  },
  addItem: function () {
    var name = this.$('.name').val();
    var amount = parseInt(this.$('.amount').val(), 10);
    var model = this.collection.findWhere({ name: name });
    if (model) {
      model.addToOrder(amount);
    } else {
      model = new ShoppingItem({ name: name, amount: amount }, { validate: true });

      if (!model.validationError) {
        this.collection.add(model);
      }
    }

    if (!model.validationError) {
      this.updateView();
      return;
    }

    this.updateView({
      name: name,
      amount: amount,
      error: model.validationError
    });
  }
});
