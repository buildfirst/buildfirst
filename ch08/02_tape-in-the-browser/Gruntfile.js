'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      test: {
        files: {
          'test/bin/bundle.js': ['test/harness.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};
