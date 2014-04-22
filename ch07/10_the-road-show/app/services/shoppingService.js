var ShoppingList = require('../collections/shoppingList.js');
var ShoppingItem = require('../models/shoppingItem.js');

var items = [
  new ShoppingItem({ name: 'Banana', amount: 3 }),
  new ShoppingItem({ name: 'Strawberry', amount: 8 }),
  new ShoppingItem({ name: 'Almond', amount: 34 }),
  new ShoppingItem({ name: 'Chocolate Bar', amount: 1 })
];

module.exports = {
  collection: new ShoppingList(items)
};
