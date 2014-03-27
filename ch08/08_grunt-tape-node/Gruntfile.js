'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    tape: {
      files: ['test/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-tape');
  grunt.registerTask('test', ['tape']);
};
