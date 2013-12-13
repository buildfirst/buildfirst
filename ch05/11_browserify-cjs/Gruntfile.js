'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: 'build'
    },
    browserify: {
      debug: {
        files: {
          'build/js/app.js': 'js/**/*.js'
        },
        options: {
          debug: true
        }
      },
      release: {
        files: {
          'build/js/app.js': 'js/**/*.js'
        }
      }
    },
    uglify: {
      release: {
        files: {
          'build/js/app.min.js': 'build/js/app.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('build:debug', ['clean', 'browserify:debug']);
  grunt.registerTask('build:release', ['clean', 'browserify:release', 'uglify']);
};
