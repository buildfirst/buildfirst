'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    concat: {
      bundle: {
        files: {
          'build/js/bundle.js': 'public/js/**/*.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};