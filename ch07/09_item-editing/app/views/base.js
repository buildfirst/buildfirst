var Backbone = require('backbone');
var Mustache = require('mustache');

module.exports = Backbone.View.extend({
  render: function () {console.log('render',this.viewModel);
    this.el.innerHTML = Mustache.to_html(this.template, this.viewModel);
  }
});
