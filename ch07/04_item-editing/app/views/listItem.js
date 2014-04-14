var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/listItem.mu', { encoding: 'utf8' });

module.exports = base.extend({
  initialize: function (model, collection) {
    this.template = template;
    this.collection = collection;
    this.model = model;
    this.model.on('change', this.updateView, this);
    this.updateView();
  },
  updateView: function () {
    this.viewModel = this.model.toJSON();
    this.viewModel.error = this.modelValidationError;
    this.render();
  },
  events: {
    'click .remove': 'removeItem',
    'click .edit': 'editItem',
    'click .cancel': 'cancelEdit',
    'click .save': 'saveItem'
  },
  removeItem: function (e) {
    this.collection.remove(this.model);
  },
  editItem: function (e) {
    this.model.set('editing', true);
  },
  cancelEdit: function (e) {
    this.model.set('editing', false);
  },
  saveItem: function (e) {
    var amount = parseInt(this.$('.edit-amount').val(), 10);
    this.model.set('amount', amount, { validate: true });
    this.model.set('editing', this.model.validationError);
  }
});
