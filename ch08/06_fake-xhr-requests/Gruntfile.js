'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      app: ['src/app'],
      tests: ['test/build']
    },
    browserify: {
      app: {
        files: {
          'src/build/bundle.js': ['src/qotd.js']
        }
      },
      tests: {
        files: {
          'test/build/test-bundle.js': ['test/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('build', ['clean:app', 'browserify:app']);
  grunt.registerTask('build-tests', ['clean:tests', 'browserify:tests']);
};
