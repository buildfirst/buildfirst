var Repo = require('../models/repo');
var Base = require('./base');

module.exports = Base.extend({
  model: Repo,
  url: '/users/:user/repos'
});
module.exports.id = 'Repos';
