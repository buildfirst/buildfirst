var Backbone = require('backbone');
Backbone.$ = require('jquery');

var SampleView = require('./views/sample.js');
var sampleView = new SampleView();

sampleView.viewModel = {
  name: 'Marian',
  orderId: '1234',
  items: [
    '1 Kite',
    '2 Manning Books',
    '7 Random Candy',
    '3 Mars Bars'
  ]
};
sampleView.render();
