'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    less: {
      design: {
        files: {
          "build/css/layout.css": 'public/css/layout.less'
        }
      },
      explicit: {
        files: {
          'build/css/explicit.css': [
            'public/css/classes.less',
            'public/css/layout.less'
          ]
        }
      },
      compile: {
        files: {
          'build/css/compiled.css': 'public/css/**/*.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
};
