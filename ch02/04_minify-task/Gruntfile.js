'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    uglify: {
      cobra: {
        files: {
          'build/js/cobra.min.js': 'public/js/cobra.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
