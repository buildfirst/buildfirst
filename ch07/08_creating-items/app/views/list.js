var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/list.mu', { encoding: 'utf8' });
var ShoppingList = require('../collections/shoppingList.js');
var ShoppingItem = require('../models/shoppingItem.js');

module.exports = base.extend({
  el: '.view',
  template: template,
  collection: new ShoppingList([
    { name: 'Banana', quantity: 3 },
    { name: 'Strawberry', quantity: 8 },
    { name: 'Almond', quantity: 34 },
    { name: 'Chocolate Bar', quantity: 1 }
  ]),
  initialize: function () {
    this.collection.on('add', this.updateView, this);
    this.collection.on('remove', this.updateView, this);
    this.collection.on('change', this.updateView, this);
    this.updateView();
  },
  updateView: function () {
    this.viewModel = {
      shopping_list: this.collection.toJSON()
    };
    this.render();
  },
  updateViewWithValidation: function (validation) {
    this.viewModel = {
      shopping_list: this.collection.toJSON(),
      error: validation.error,
      name: validation.name,
      quantity: validation.quantity
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
    var quantity = parseInt(this.$('.quantity').val(), 10);
    var model = this.collection.findWhere({ name: name });
    if (model) {
      model.addToOrder(quantity);
    } else {
      model = new ShoppingItem({ name: name, quantity: quantity }, { validate: true });

      if (!model.validationError) {
        this.collection.add(model);
      }
    }

    if (!model.validationError) {
      return;
    }
    this.updateViewWithValidation({
      name: name,
      quantity: quantity,
      error: model.validationError
    });
  }
});
