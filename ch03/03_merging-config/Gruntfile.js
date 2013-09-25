'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    jshint: {
      me: ['**/*.js', '!node_modules/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};