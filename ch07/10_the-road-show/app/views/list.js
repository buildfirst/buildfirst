var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/itemList.mu', { encoding: 'utf8' });
var shoppingService = require('../services/shoppingService.js');
var ListItemView = require('./listItem.js');

module.exports = base.extend({
  el: '.view',
  template: template,
  initialize: function () {
    this.render();
    this.$list = this.$('.items');
    this.partials = {};
    this.collection = shoppingService.collection;
    this.collection.on('add', this.addItem, this);
    this.collection.on('remove', this.removeItem, this);
    this.collection.models.forEach(this.addItem, this);
  },
  addItem: function (model) {
    var item = new ListItemView({
      model: model,
      collection: this.collection
    });
    this.$list.append(item.el);
    this.partials[model.cid] = item;
  },
  removeItem: function (model) {
    var item = this.partials[model.cid];
    item.$el.remove();
    delete this.partials[model.cid];
  }
});
