var base = require('./base.js');
var ShoppingItem = require('../models/shopping_item.js');

module.exports = base.extend({
  model: ShoppingItem,
  url: '/items'
});
module.exports.id = 'ShoppingList';
