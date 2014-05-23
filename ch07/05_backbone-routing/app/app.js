var Backbone = require('backbone');
var $ = require('jquery');

Backbone.$ = $;

var ViewRouter = require('./routers/viewRouter.js');
new ViewRouter();

// wait on DOM ready: Backbone uses iframes in IE
// http://backbonejs.org/#History-start
$(function () {
  Backbone.history.start();
});
