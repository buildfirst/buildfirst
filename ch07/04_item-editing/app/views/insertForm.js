var $ = require('jquery');
var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/insertForm.mu', { encoding: 'utf8' });

module.exports = base(template).extend({
  el: '.more',
  initialize: function (collection) {
    this.collection = collection;
    this.updateView({});
  },
  events: {
    'click .add': 'addItem'
  },
  updateView: function (model) {
    this.model = model;
    this.render();
  },
  addItem: function () {
    var name = this.$('.name').val();
    var amount = parseInt(this.$('.amount').val(), 10);
    var model = this.collection.findWhere({ name: name });
    if (model) {
      model.addToOrder(amount);
      this.updateView({
        name: name,
        amount: amount,
        error: this.validationError
      });
    } else {
      model = { name: name, amount: amount };
      this.collection.add(model, { validate: true });
      this.updateView({ error: this.validationError });
    }
  }
});
