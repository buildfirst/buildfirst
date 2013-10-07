'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: 'build'
    },

    copy: {
      sources: {
        src: 'public/**/*',
        dest: 'build/'
      }
    },

    rev: {
      release: {
        files: {
          src: ['build/**/*.{css,js,png}']
        }
      }
    },

    usemin: {
      html: ['build/**/*.html'],
      css: ['build/**/*.css']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-rev');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('build:release', ['clean', 'copy', 'rev', 'usemin']);
};