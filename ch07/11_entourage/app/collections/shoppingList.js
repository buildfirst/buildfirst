var base = require('./base.js');
var ShoppingItem = require('../models/shoppingItem.js');

module.exports = base.extend({
  model: ShoppingItem,
  url: '/items'
});
module.exports.id = 'ShoppingList';
