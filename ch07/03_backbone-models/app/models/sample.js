var Backbone = require('backbone');
var binary = require('../service/binary.js');

module.exports = Backbone.Model.extend({
  getBinary: function () {
    var raw = this.get('raw');
    var bin = binary.fromString(raw);
    if (bin.length > 20) {
      return bin.substr(0, 20) + '\u2026';
    }
    return bin;
  },
  isLink: function () {
    var link = /^https?:\/\/.+/i; // naive test for links
    var raw = this.get('raw');
    return link.test(raw);
  }
});
