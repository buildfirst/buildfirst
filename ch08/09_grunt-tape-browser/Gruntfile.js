'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      tests: ['test/build']
    },
    browserify: {
      tests: {
        files: {
          'test/build/test-bundle.js': ['test/*.js']
        }
      }
    },
    karma: {
      files: ['test/build/test-bundle.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('build-tests', ['clean:tests', 'browserify:tests']);
  grunt.registerTask('test', ['build-tests', 'karma']);
};
