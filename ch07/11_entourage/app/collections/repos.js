var Repo = require('../models/repo');
var Base = require('./base');

module.exports = Base.extend({
  model: Repo,
  url: function () {
    if (this.params.user) {
      return '/users/:user/repos';
    } else {
      return '/repositories';
    }
  }
});
module.exports.id = 'Repos';
