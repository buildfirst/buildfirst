var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/listView.mu', { encoding: 'utf8' });
var Backbone = require('backbone');
var ShoppingList = require('../collections/shoppingList.js');
var ShoppingItem = require('../models/shoppingItem.js');

module.exports = base.extend({
  el: '.items',
  initialize: function () {
    var items = [
      new ShoppingItem({ name: 'Banana', amount: 3 }),
      new ShoppingItem({ name: 'Strawberry', amount: 8 }),
      new ShoppingItem({ name: 'Almond', amount: 34 }),
      new ShoppingItem({ name: 'Chocolate Bar', amount: 1 })
    ];
    this.template = template;
    this.collection = new ShoppingList(items);
    this.collection.on('remove', this.updateView, this);
    this.collection.on('add', this.updateView, this);
    this.collec|tion.on('change', this.updateView, this);
    this.updateView();
  },
  updateView: function () {
    this.model = {
      shopping_list: this.collection.toJSON()
    };
    this.render();
  },
  events: {
    'click .remove': 'removeItem',
    'click .edit': 'editItem',
    'click .cancel': 'cancelEdit',
    'click .save': 'saveItem'
  },
  findModel: function (e) {
    var name = e.target.dataset.name;
    var model = this.collection.findWhere({ name: name });
    return model;
  },
  removeItem: function (e) {
    var model = this.findModel(e);
    this.collection.remove(model);
  },
  editItem: function (e) {
    var model = this.findModel(e);
    model.set('editing', true);
  },
  cancelEdit: function (e) {
    var model = this.findModel(e);
    model.set('editing', false);
  },
  saveItem: function (e) {
    var model = this.findModel(e);
    var amount = parseInt(this.$('.edit-amount').val(), 10);
    model.set('amount', amount, { validate: true });
    model.set('editing', false);
  }
});
