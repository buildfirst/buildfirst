var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/insertForm.mu', { encoding: 'utf8' });
var ShoppingItem = require('../models/shoppingItem.js');

module.exports = base.extend({
  el: '.create',
  model: {},
  initialize: function () {
    this.template = template;
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
    var amount = parseInt(this.$('.amount').val(), 10);
    var model = this.collection.findWhere({ name: name });
    if (model) {
      model.addToOrder(amount);
    } else {
      model = new ShoppingItem({ name: name, amount: amount }, { validate: true });

      if (!model.validationError) {
        this.collection.add(model);
        this.updateView();
        return;
      }
    }

    this.updateView({
      name: name,
      amount: amount,
      error: model.validationError
    });
  }
});
