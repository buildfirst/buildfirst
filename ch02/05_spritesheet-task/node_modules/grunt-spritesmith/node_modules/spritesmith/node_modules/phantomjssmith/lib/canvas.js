var assert = require('assert'),
    async = require('async'),
    exporters = require('./exporters').exporters;

// TODO: I feel like an abstract class is perfect here.
// I just want to know if it can be not as classical o_o

function Canvas(params) {
  // Save the options for later
  this.params = params;

  // Create a store for images
  this.images = [];
}
Canvas.prototype = {
  'addImage': function addImage (img, x, y) {
    // Save the image for later
    this.images.push({
      img: img,
      x: x,
      y: y
    });
  },
  'export': function exportFn (options, cb) {
    // Grab the exporter
    var format = options.format || 'png',
        exporter = exporters[format];

    // Assert it exists
    assert(exporter, 'Exporter ' + format + ' does not exist for spritesmith\'s canvas engine');

    // Render the item
    exporter.call(this, options, cb);
  }
};

function createCanvas(width, height, cb) {
  // Create a new canvas and callback
  var canvas = new Canvas({
        width: width,
        height: height
      });
  cb(null, canvas);
}

// Expose Canvas and createCanvas to engine
module.exports = {
  Canvas: Canvas,
  createCanvas: createCanvas
};