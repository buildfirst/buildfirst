// TODO: Can we do some inversion of control here?
// TODO: Should we be explicit in export options? -- I think so -- it is good observer formatting
var path = require('path'),
    spawn = require('child_process').spawn,
    Tempfile = require('temporary/lib/file'),
    exporters = {};

// Function to add new exporters
function addExporter(name, exporter) {
  exporters[name] = exporter;
}

// Helper to create exporters (could be a class for better abstraction)
function getPhantomjsExporter(ext) {
  /**
   * Generic exporter
   * @param {Object} options Options to export with
   * @param {Number} [options.quality] Quality of the exported item
   * @param {Function} cb Error-first callback to return binary image string to
   */
  return function phantomjsExporterFn (options, cb) {
    var canvas = this.canvas,
        that = this;

    // Convert over all image paths to url paths
    var images = that.images;
    images.forEach(function getUrlPath (img) {
      img = img.img;
      img._urlpath = path.relative(__dirname + '/scripts', img._filepath);
    });

    // Collect our parameters
    var params = that.params;
    params.images = images;
    params.options = options;

    // Stringify our argument for phantomjs
    var arg = JSON.stringify(params),
        encodedArg = encodeURIComponent(arg);

    // Write out argument to temporary file -- streams weren't cutting it
    var tmp = new Tempfile(),
        filepath = tmp.path;
    tmp.writeFileSync(encodedArg, 'utf8');

    // Create a child process for phantomjs
    var phantomjs = spawn('phantomjs', [__dirname + '/scripts/compose.js', filepath]);

    // When there is data, save it
    var retVal = '';
    phantomjs.stdout.on('data', function (buffer) {
      // Interpret the buffer into a string, parse it via base64, and into binary
      var str = buffer.toString(),
          base64Buffer = new Buffer(str, 'base64'),
          binaryStr = base64Buffer.toString('binary');

      // Save the binary chunk
      retVal += binaryStr;
    });

    // When there is an error, concatenate it
    var err = '';
    phantomjs.stderr.on('data', function (buffer) {
      err += buffer;
    });

    // When we are done
    phantomjs.on('close', function () {
      // Destroy the temporary file
      try { tmp.unlinkSync(); } catch (e) {}

      // If there was an error in phantom, callback with it
      if (err) {
        cb(new Error(err));
      }

      // Otherwise, callback with our retVal
      cb(null, retVal);
    });
  };
}

// Generate the png exporter
var phantomjsPngExporter = getPhantomjsExporter('png');
addExporter('png', phantomjsPngExporter);
addExporter('image/png', phantomjsPngExporter);

// TODO: It seems we can export jpg and webp images
// https://developer.mozilla.org/en-US/docs/DOM/HTMLCanvasElement#Methods

// Export our exporters
module.exports = {
  exporters: exporters,
  addExporter: addExporter
};