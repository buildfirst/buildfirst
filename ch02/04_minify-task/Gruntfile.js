'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    uglify: {
      js: {
        files: {
          'build/js/foo.min.js': 'public/js/foo.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};