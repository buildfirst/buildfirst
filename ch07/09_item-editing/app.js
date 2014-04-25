var Backbone = require('backbone');
Backbone.$ = require('jquery');

var ListView = require('./app/views/list.js');
var listView = new ListView();

var AddItemView = require('./app/views/addItem.js');
var addItemView = new AddItemView({ collection: listView.collection });
