var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/sampleView.mu', { encoding: 'utf8' });
var SampleModel = require('../models/sampleModel.js');

module.exports = base.extend({
  el: '.view',
  template: template,
  initialize: function () {
    this.model = new SampleModel();
    this.model.on('change', this.updateView, this);
    this.model.set('raw', 'http://bevacqua.io/buildfirst');
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
