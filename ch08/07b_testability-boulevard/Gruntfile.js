'use strict';

var fs = require('fs');
var mkdirp = require('mkdirp');
var browserify = require('browserify');
var proxyquire = require('proxyquireify');

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: ['build'],
      tests: ['test/build']
    },
    browserify: {
      options: {
        transform: ['brfs'],
        debug: true
      },
      debug: {
        files: {
          'build/bundle.js': 'app/app.js'
        }
      }
    },
    watch: {
      app: {
        files: 'app/**/*.js',
        tasks: ['browserify'],
        options: {
          interrupt: true
        }
      }
    }
  });

  function browserifyTests () {
    var done = this.async();
    var main = require.resolve('./test/routes');
    var dir = __dirname + '/test/build';

    mkdirp.sync(dir);
    browserify()
      .transform('brfs')
      .plugin(proxyquire.plugin)
      .require(main, { entry: true })
      .bundle()
      .pipe(fs.createWriteStream(dir + '/test-bundle.js'))
      .on('done', done);
  }

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('browserify_tests', browserifyTests);

  grunt.registerTask('build', ['clean:build', 'browserify:debug']);
  grunt.registerTask('build-tests', ['clean:tests', 'browserify_tests']);
  grunt.registerTask('default', ['build', 'watch:app']);
};
