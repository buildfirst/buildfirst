var Backbone = require('backbone');
Backbone.$ = require('jquery');

var SampleView = require('./app/views/sampleView.js');
var view = new SampleView();

view.viewModel = {
  name: 'Marian',
  orderId: '1234',
  items: [
    '1 Kite',
    '2 Manning Books',
    '7 Random Candy',
    '3 Mars Bars'
  ]
};
view.render();
