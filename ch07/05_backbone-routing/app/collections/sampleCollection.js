var Backbone = require('backbone');
var SampleModel = require('../models/sampleModel.js');

module.exports = Backbone.Collection.extend({
  model: SampleModel
});
