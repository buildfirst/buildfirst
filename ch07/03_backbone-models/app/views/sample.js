var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/sample.mu', { encoding: 'utf8' });
var SampleModel = require('../models/sample.js');

module.exports = base.extend({
  el: '.view',
  template: template,
  initialize: function () {
    this.model = new SampleModel();
    this.model.on('change', this.updateView, this);
    this.model.set('raw', 'https://ponyfoo.com/bf');
  },
  updateView: function () {
    this.viewModel = {
      raw: this.model.get('raw'),
      binary: this.model.getBinary(),
      isLink: this.model.isLink()
    };
    this.render();
  },
  events: {
    'change .input': 'inputChanged'
  },
  inputChanged: function (e) {
    this.model.set('raw', e.target.value);
  }
});
