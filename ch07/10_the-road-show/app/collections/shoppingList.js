var Backbone = require('backbone');
var ShoppingItem = require('../models/shoppingItem.js');

module.exports = Backbone.Collection.extend({
  model: ShoppingItem
});
