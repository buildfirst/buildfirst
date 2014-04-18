var Backbone = require('backbone');
Backbone.$ = require('jquery');

var ListView = require('./app/views/listView.js');
var list = new ListView();

var InsertForm = require('./app/views/insertForm.js');
var insert = new InsertForm({ collection: list.collection });
