'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: ['build']
    },
    browserify: {
      app: {
        files: {
          'build/bundle.js': ['app.js']
        },
        options: {
          transform: ['brfs']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('build', ['clean', 'browserify:app']);
};
