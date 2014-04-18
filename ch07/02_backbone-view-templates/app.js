var Backbone = require('backbone');
Backbone.$ = require('jquery');

var SampleView = require('./app/views/sampleView.js');
var view = new SampleView();

setTimeout(function () {
  view.viewModel = {
    foo: 'Something has changed!'
  };
  view.render();
}, 2000);
