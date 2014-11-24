'use strict';

var fs = require('fs');
var glob = require('glob');
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
    var dir = __dirname + '/test/build';

    // create required directory structure
    mkdirp.sync(dir);

    // compile browserify bundle
    var bundle = browserify()
      .transform('brfs') // add brfs transform for mustache templates
      .plugin(proxyquire.plugin); // use proxyquire plugin so you can mock `require` calls

    glob
      .sync('./test/*.js') // get all test modules
      .map(resolve) // resolve them to their full paths
      .reduce(include, bundle) // require them in the browserify bundle
      .bundle({ debug: true }) // bundle them together
      .pipe(fs.createWriteStream(dir + '/test-bundle.js')) // write to disk
      .on('done', done); // end the Grunt task

    function include (bundle, file) {
      // `entry: true` means that it's not just accessible outside of the bundle, but also an entry point
      bundle.require(file, { entry: true });
      return bundle;
    }
  }

  function resolve (file) {
    return require.resolve(file);
  }

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('browserify_tests', 'Compile tests for the browser using Browserify', browserifyTests);

  grunt.registerTask('build', ['clean:build', 'browserify:debug']);
  grunt.registerTask('build-tests', ['clean:tests', 'browserify_tests']);
  grunt.registerTask('default', ['build', 'watch:app']);
};
