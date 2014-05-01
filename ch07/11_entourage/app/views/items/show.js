var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'items_show_view',

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    data.build = this.options.build.toJSON();
    return data;
  }
});
module.exports.id = 'items/show';
