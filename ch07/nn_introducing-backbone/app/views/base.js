var Backbone = require('backbone');
var Mustache = require('mustache');

module.exports = function (template) {
  return Backbone.View.extend({
    render: function () {
      this.el.innerHTML = Mustache.to_html(template, this.model);
    }
  });
};
