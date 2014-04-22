var Backbone = require('backbone');
var List = require('../views/list.js');
var AddItem = require('../views/addItem.js');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'root',
    'items': 'listItems',
    'items/add': 'addItem'
  },
  root: function () {
    this.navigate('items', { trigger: true });
  },
  listItems: function () {
    new List();
  },
  addItem: function () {
    new AddItem();
  }
});
