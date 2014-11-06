var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/addItem.mu', { encoding: 'utf8' });
var ShoppingItem = require('../models/shoppingItem.js');

module.exports = base.extend({
  el: '.add-view',
  template: template,
  initialize: function () {
    this.updateView();
  },
  updateView: function (vm) {
    this.viewModel = vm || {};
    this.render();
  },
  events: {
    'click .add': 'addItem'
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
      this.updateView();
      return;
    }

    this.updateView({
      name: name,
      quantity: quantity,
      error: model.validationError
    });
  }
});
