var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/sample.mu', { encoding: 'utf8' });

module.exports = base.extend({
  el: '.view',
  template: template
});
