var Backbone = require('backbone');
Backbone.$ = require('jquery');

var ListView = require('./views/list.js');
var listView = new ListView();

var AddItemView = require('./views/addItem.js');
var addItemView = new AddItemView({ collection: listView.collection });
