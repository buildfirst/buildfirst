var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/sampleView.mu', { encoding: 'utf8' });

module.exports = base.extend({
  el: '.view',
  template: template,
  viewModel: {
    foo: 'Very amusing template'
  },
  initialize: function () {
    this.render();
  }
});
