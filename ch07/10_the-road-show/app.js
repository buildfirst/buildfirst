var Backbone = require('backbone');
var $ = require('jquery');

Backbone.$ = $;

var ViewRouter = require('./app/routers/viewRouter.js');
new ViewRouter();

$(function () {
  Backbone.history.start();
});
