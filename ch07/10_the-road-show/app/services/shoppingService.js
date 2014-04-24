var ShoppingList = require('../collections/shoppingList.js');

var items = [
  { name: 'Banana', amount: 3 },
  { name: 'Strawberry', amount: 8 },
  { name: 'Almond', amount: 34 },
  { name: 'Chocolate Bar', amount: 1 }
];

module.exports = {
  collection: new ShoppingList(items)
};
