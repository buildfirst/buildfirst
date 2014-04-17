var Backbone = require('backbone');
Backbone.$ = require('jquery');

var SampleView = Backbone.View.extend({
  el: '.view',
  render: function () {
    this.el.innerText = 'foo';
  }
});

var view = new SampleView();

view.render();
