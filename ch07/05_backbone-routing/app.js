var Backbone = require('backbone');
var $ = require('jquery');
var ViewRouter = require('./app/routers/viewRouter.js');

Backbone.$ = $;

$(function () {
  new ViewRouter();
  Backbone.history.start();
});
