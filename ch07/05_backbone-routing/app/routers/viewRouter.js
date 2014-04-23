var Backbone = require('backbone');
var ItemView = require('../views/item.js');
var DetailView = require('../views/detail.js');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'root',
    'items': 'items',
    'items/:id': 'getItemById'
  },
  root: function () {
    this.navigate('items', { trigger: true });
  },
  items: function () {
    new ItemView();
  },
  getItemById: function (id) {
    new DetailView(id);
  }
});
