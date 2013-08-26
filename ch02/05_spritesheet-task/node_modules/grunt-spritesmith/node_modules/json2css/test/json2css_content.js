var assert = require('assert'),
    fs = require('fs'),
    exec = require('child_process').exec,
    Tempfile = require('temporary/lib/file'),
    json2css = require('../lib/json2css.js'),
    expectedDir = __dirname + '/expected_files';

module.exports = {
  // Common setup/assertion
  'An array of image positions, dimensions, and names': function () {
    // TODO: The malicious URL should be placed in a separate test but I want to test every engine and hate the bloat
    this.info = [
      {'name': 'sprite1', 'x': 0, 'y': 0, 'width': 10, 'height': 20, 'total_width': 80, 'total_height': 100, 'image': 'nested/dir/spritesheet.png'},
      {'name': 'sprite2', 'x': 10, 'y': 20, 'width': 20, 'height': 30, 'total_width': 80, 'total_height': 100, 'image': 'nested/dir/spritesheet.png'},
      {'name': 'sprite3', 'x': 30, 'y': 50, 'width': 50, 'height': 50, 'total_width': 80, 'total_height': 100, 'image': 'nested/dir/( \'")/spritesheet.png'}
    ];
  },
  'An object of image positions and dimensions keyed by names': function () {
    this.info = {
      'sprite1': {'x': 0, 'y': 0, 'width': 10, 'height': 20, 'total_width': 80, 'total_height': 100, 'image': 'nested/dir/spritesheet.png'},
      'sprite2': {'x': 10, 'y': 20, 'width': 20, 'height': 30, 'total_width': 80, 'total_height': 100, 'image': 'nested/dir/spritesheet.png'},
      'sprite3': {'x': 30, 'y': 50, 'width': 50, 'height': 50, 'total_width': 80, 'total_height': 100, 'image': 'nested/dir/( \'")/spritesheet.png'}
    };
  },
  'processed via json2css': function () {
    // Convert info into result via json2css
    var options = this.options,
        info = this.info,
        result = options ? json2css(info, options) : json2css(info);
    this.result = result;

    // If we are debugging, output results to a file
    if (true) {
    // if (false) {
      try { fs.mkdirSync(__dirname + '/actual_files/'); } catch (e) {}
      fs.writeFileSync(__dirname + '/actual_files/' + this.filename, result, 'utf8');
    }
  },
  'matches as expected': function () {
    // Load in the files and assert
    var actual = this.result,
        expected = fs.readFileSync(expectedDir  + '/' + this.filename, 'utf8');
    assert.strictEqual(actual, expected);
  },
  'is deep equal to expected': function () {
    // Load in the files and assert
    var actual = JSON.parse(this.result),
        expected = require(expectedDir  + '/' + this.filename, 'utf8');
    assert.deepEqual(actual, expected);
  },

  // JSON
  'processed into JSON': [function () {
    this.options = {'format': 'json'};
    this.filename = 'json.json';
  }, 'processed via json2css'],
  'is valid JSON': function () {
    var result = this.result;
    assert.doesNotThrow(function () {
      JSON.parse(result);
    });
  },

  // CSS
  'processed into CSS': [function () {
    this.options = null;
    this.filename = 'css.css';
  }, 'processed via json2css'],
  'is valid CSS': function () {
    // Add some stylus which hooks into our result
    var css = this.result;

    // Assert no errors and validity of CSS
    assert.notEqual(css, '');

    // TODO: Validate CSS
    // console.log('CSS', css);
  },

  // Stylus
  'processed into Stylus': [function () {
    this.options = {'format': 'stylus'};
    this.filename = 'stylus.styl';
  }, 'processed via json2css'],
  'is valid Stylus': function (done) {
    // Add some stylus which hooks into our result
    var styl = this.result;
    styl += [
      '.feature',
      '  height: $sprite1_height;',
      '  spriteWidth($sprite2)',
      '  spriteImage($sprite3)',
      '',
      '.feature2',
      '  sprite($sprite2)'
    ].join('\n');

    // Render the stylus
    var stylus = require('stylus');

    stylus.render(styl, function handleStylus (err, css) {
      // Assert no errors and validity of CSS
      assert.strictEqual(err, null);
      assert.notEqual(css, '');

      // TODO: Validate CSS
      // console.log('Stylus', css);

      // Callback
      done(err);
    });
  },

  // LESS
  'processed into LESS': [function () {
    this.options = {'format': 'less'};
    this.filename = 'less.less';
  }, 'processed via json2css'],
  'is valid LESS': function (done) {
    // Add some LESS to our result
    var lessStr = this.result;
    lessStr += [
      '.feature {',
      '  height: @sprite1-height;',
      '  .sprite-width(@sprite2);',
      '  .sprite-image(@sprite3);',
      '}',
      '',
      '.feature2 {',
      '  .sprite(@sprite2);',
      '}'
    ].join('\n');

    // Render the LESS, assert no errors, and valid CSS
    var less = require('less');
    less.render(lessStr, function (err, css) {
      assert.strictEqual(err, null);
      assert.notEqual(css, '');

      // console.log('LESS', css);

      // Verify there are no braces in the CSS (array string coercion)
      assert.strictEqual(css.indexOf(']'), -1);

      // Callback
      done(err);
    });
  },

  // SASS
  'processed into SASS': [function () {
    this.options = {'format': 'sass'};
    this.filename = 'sass.sass';
  }, 'processed via json2css'],
  'is valid SASS': function (done) {
    // Add some SASS to our result
    var sassStr = this.result;
    sassStr += '\n' + [
      '.feature',
      '  height: $sprite1-height',
      '  @include sprite-width($sprite2)',
      '  @include sprite-image($sprite3)',
      '',
      '.feature2',
      '  @include sprite($sprite2)'
    ].join('\n');

    // Render the SASS, assert no errors, and valid CSS
    var tmp = new Tempfile();
    tmp.writeFileSync(sassStr);
    exec('sass ' + tmp.path, function (err, css, stderr) {
      assert.strictEqual(stderr, '');
      assert.strictEqual(err, null);
      assert.notEqual(css, '');
      // console.log('SASS', css);
      done(err);
    });
  },

  // SCSS
  'processed into SCSS': [function () {
    this.options = {'format': 'scss'};
    this.filename = 'scss.scss';
  }, 'processed via json2css'],
  'is valid SCSS': function (done) {
    // Add some SCSS to our result
    var scssStr = this.result;
    scssStr += '\n' + [
      '.feature {',
      '  height: $sprite1-height;',
      '  @include sprite-width($sprite2);',
      '  @include sprite-image($sprite3);',
      '}',
      '',
      '.feature2 {',
      '  @include sprite($sprite2);',
      '}'
    ].join('\n');

    // Render the SCSS, assert no errors, and valid CSS
    var tmp = new Tempfile();
    tmp.writeFileSync(scssStr);
    exec('sass --scss ' + tmp.path, function (err, css, stderr) {
      assert.strictEqual(stderr, '');
      assert.strictEqual(err, null);
      assert.notEqual(css, '');
      // console.log('SCSS', css);
      done(err);
    });
  }
};
