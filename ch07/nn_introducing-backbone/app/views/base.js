var Backbone = require('backbone');
var Mustache = require('mustache');

module.exports = function (template) {
  return Backbone.View.extend({
    render: function () {
      var view = this;
      var model = view.model.toJSON();
      var html = Mustache.to_html(template, model);
      view.el.innerHTML = html;
      return view;
    }
  });
};
