var ShoppingList = require('../collections/shoppingList.js');

var items = [
  { name: 'Banana', quantity: 3 },
  { name: 'Strawberry', quantity: 8 },
  { name: 'Almond', quantity: 34 },
  { name: 'Chocolate Bar', quantity: 1 }
];

module.exports = {
  collection: new ShoppingList(items)
};
