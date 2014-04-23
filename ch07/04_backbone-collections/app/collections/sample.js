var Backbone = require('backbone');
var SampleModel = require('../models/sample.js');

module.exports = Backbone.Collection.extend({
  model: SampleModel
});
