var $ = require('jquery');
var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/insertForm.mu', { encoding: 'utf8' });
var ShoppingItem = require('../models/shoppingItem.js');

module.exports = base.extend({
  el: '.create',
  initialize: function (collection) {
    this.template = template;
    this.collection = collection;
    this.updateView({});
  },
  events: {
    'click .add': 'addItem'
  },
  updateView: function (model) {
    this.model = model;
    this.render();
  },
  addItem: function () {
    var error;
    var name = this.$('.name').val();
    var amount = parseInt(this.$('.amount').val(), 10);
    var model = this.collection.findWhere({ name: name });
    if (model) {
      model.addToOrder(amount);
      this.updateView({
        name: name,
        amount: amount,
        error: model.validationError
      });
    } else {
      model = new ShoppingItem({ name: name, amount: amount });
      error = model.validate(model.attributes);
      if (!error) {
        this.collection.add(model);
      }
      this.updateView({ error: error });
    }
  }
});
