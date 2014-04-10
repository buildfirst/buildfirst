var Backbone = require('backbone');
var Mustache = require('mustache');

module.exports = function (template) {
  return Backbone.View.extend({
    render: function (el, model) {
      el.innerHTML = Mustache.to_html(template, model);
    }
  });
};
