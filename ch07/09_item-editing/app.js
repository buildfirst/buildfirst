var Backbone = require('backbone');
Backbone.$ = require('jquery');

var List = require('./app/views/list.js');
var list = new List();

var AddItem = require('./app/views/addItem.js');
var insert = new AddItem({ collection: list.collection });
