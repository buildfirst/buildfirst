var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/sampleView.mu', { encoding: 'utf8' });
var SampleCollection = require('../collections/sample.js');

module.exports = base.extend({
  el: '.view',
  template: template,
  initialize: function () {
    var collection = new SampleCollection();
    collection.on('add', this.report);
    collection.add({ name: 'Michael' });
    collection.add({ name: 'Jason' });
    collection.add({ name: 'Marian' });
    collection.add({ name: 'Candy' });
    this.viewModel = {
      title: 'Names',
      people: collection.toJSON()
    };
    this.render();
  },
  report: function (model) {
    var name = model.get('name');
    console.log('Someone got added to the collection:', name);
  }
});
