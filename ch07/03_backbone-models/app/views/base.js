var Backbone = require('backbone');
var Mustache = require('mustache');

module.exports = Backbone.View.extend({
  render: function () {
    this.el.innerHTML = Mustache.to_html(this.template, this.viewModel);
  }
});
