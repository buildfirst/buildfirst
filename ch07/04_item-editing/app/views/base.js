var Backbone = require('backbone');
var Mustache = require('mustache');

module.exports = Backbone.View.extend({
  render: function () {
    var result;
    if (this.append) {
      result = Mustache.render(this.template, this.model);
      this.$el.append(result);
    } else {
      result = Mustache.to_html(this.template, this.model);
      this.$el.html(result);
    }
  }
});
