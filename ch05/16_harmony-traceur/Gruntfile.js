'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: 'build'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: 'js/**/*.js'
    },

    traceur: {

      debug: {
        src: 'js/**/*.js',
        dest: 'build/',
        options: {
          sourceMaps: true
        }
      },

      release: {
        src: 'js/**/*.js',
        dest: 'build/'
      }

    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-traceur');

  grunt.registerTask('build:debug', ['traceur:debug']);
  grunt.registerTask('build:release', ['traceur:release']);
};
