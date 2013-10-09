'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      support: ['Gruntfile.js'],
      server: ['app.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  // tasks to run on the CI platform
  grunt.registerTask('ci', ['jshint']);
};
