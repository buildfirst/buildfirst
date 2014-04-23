var Backbone = require('backbone');
Backbone.$ = require('jquery');

var SampleView = Backbone.View.extend({
  el: '.view',
  render: function () {
    this.el.innerText = 'foo';
  }
});

var sampleView = new SampleView();

sampleView.render();
