'use strict';

module.exports = function (grunt) {
  grunt.initConfig({});

  grunt.loadNpmTasks('grunt-testling');

  grunt.registerTask('test', ['testling']);
};
