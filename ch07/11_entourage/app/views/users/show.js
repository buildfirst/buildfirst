var BaseView = require('../base');

module.exports = BaseView.extend({
  getTemplateData: function () {
    var data = BaseView.prototype.getTemplateData.call(this);
    data.repos = this.options.repos;
    return data;
  }
});
module.exports.id = 'users/show';
