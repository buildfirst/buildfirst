var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  addToOrder: function (quantity) {
    this.set('quantity', this.get('quantity') + quantity, { validate: true });
  },
  validate: function (attrs) {
    if (!attrs.name) {
      return 'Please enter the name of the item.';
    }
    if (typeof attrs.quantity !== 'number' || isNaN(attrs.quantity)) {
      return 'The quantity must be numeric!';
    }
    if (attrs.quantity < 1) {
      return 'You should keep your groceries to yourself.';
    }
  }
});
