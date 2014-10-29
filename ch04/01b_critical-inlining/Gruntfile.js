'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

    clean: {
      build: 'build'
    },

    critical: {
      example: {
        options: {
          base: './',
          css: [
            'page.css'
          ]
        },
        src: 'views/page.html',
        dest: 'build/page.html'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-critical');

  grunt.registerTask('build:debug', ['clean']);
  grunt.registerTask('build:release', ['clean', 'critical:example']);
};
