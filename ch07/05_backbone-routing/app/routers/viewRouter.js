var Backbone = require('backbone');
var ItemView = require('../views/itemView.js');
var DetailView = require('../views/detailView.js');

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
