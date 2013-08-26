// Load in parts to make our content
var smith = require('../lib/gmsmith'),
    extend = require('obj-extend'),
    commonTest = require('spritesmith-engine-test').content;

// Duck punch over test items
var content = extend({}, commonTest, {
  'gmsmith': function () {
    this.smith = smith;
    smith.set({imagemagick: false});

    var expectedDir = __dirname + '/expected_files/';
    this.expectedFilepaths = [expectedDir + '/multiple.png', expectedDir + '/multiple2.png'];
  },
  'running against imagemagick': function () {
    smith.set({imagemagick: true});
  }
});

// If we are on Windows, skip performance test items
if (process.platform === 'win32') {
  delete content["interpretting a ridiculous amount of images"];
  delete content["does not crash"];
  delete content["returns an image"];
}

// Export the content
module.exports = content;