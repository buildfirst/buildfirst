var test = require('tape');
var ShoppingItem = require('../app/models/shoppingItem.js');
var cases = [
  ['ShoppingItem must be constructed with a name', {}],
  ['ShoppingItem must be constructed with a quantity', { name: 'Chocolate' }],
  ['ShoppingItem cannot have NaN quantity', { name: 'Chocolate', quantity: NaN }],
  ['ShoppingItem cannot have negative quantity', { name: 'Chocolate', quantity: -1 }],
  ['ShoppingItem cannot have zero quantity', { name: 'Chocolate', quantity: 0 }],
  ['ShoppingItem is valid when both a name and a positive quantity are provided', { name: 'Chocolate', quantity: 1 }, true]
];

cases.forEach(testCase);

function testCase (c) {
  test(c[0], function (t) {
    // Arrange
    var expectation = !c[2]; // t.true or t.false
    var expectationText = ' is ' + (expectation ? 'invalid' : 'valid');

    // Act
    var item = new ShoppingItem(c[1], { validate: true });

    // Assert
    t[expectation](item.validationError, JSON.stringify(c[1]) + expectationText);
    t.end();
  });
}

test('consumer can increase quantity of a shoppingItem', function (t) {
  // Arrange
  var item = new ShoppingItem({
    name: 'Chocolate', quantity: 1
  }, { validate: true });
  // Act
  item.addToOrder(4);
  // Assert
  t.equal(item.validationError, null);
  t.equal(item.get('quantity'), 5, 'four items got added to the order');
  t.end();
});
