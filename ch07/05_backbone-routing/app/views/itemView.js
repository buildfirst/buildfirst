var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/itemView.mu', { encoding: 'utf8' });

module.exports = base.extend({
  el: '.view',
  template: template,
  initialize: function () {
    this.viewModel = {
      name: 'Contrived Example',
      id: 1289
    };
    this.render();
  }
});
