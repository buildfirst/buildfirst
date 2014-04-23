var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/detail.mu', { encoding: 'utf8' });

module.exports = base.extend({
  el: '.view',
  template: template,
  initialize: function (id) {
    this.viewModel = {
      name: 'Contrived Example',
      id: id
    };
    this.render();
  }
});
