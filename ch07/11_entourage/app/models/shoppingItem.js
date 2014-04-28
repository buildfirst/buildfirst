var base = require('./base.js');

module.exports = base.extend({
  addToOrder: function (amount) {
    this.set('amount', this.get('amount') + amount, { validate: true });
  },
  validate: function (attrs) {
    if (!attrs.name) {
      return 'Please enter the name of the item.';
    }
    if (typeof attrs.amount !== 'number' || isNaN(attrs.amount)) {
      return 'The amount must be numeric!';
    }
    if (attrs.amount < 1) {
      return 'You should keep your groceries to yourself.';
    }
  }
});
