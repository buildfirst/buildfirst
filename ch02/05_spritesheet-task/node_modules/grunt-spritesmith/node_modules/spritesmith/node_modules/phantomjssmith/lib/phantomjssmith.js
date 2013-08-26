// Load in and combine all engine parts
var extend = require('obj-extend');
module.exports = extend({},
  require('./image'),
  require('./exporters'),
  require('./canvas'));