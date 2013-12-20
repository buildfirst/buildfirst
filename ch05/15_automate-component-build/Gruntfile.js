'use strict';

module.exports = function (grunt) {
  grunt.initConfig({

    clean: {
      build: 'build'
    },

    componentbuild: {

      debug: {
        options: {
         dev: true,
         sourceUrls: true
        }
      },

      release: {}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-component-build');

  grunt.registerTask('build:debug', ['clean', 'component:debug']);
  grunt.registerTask('build:release', ['clean', 'component:release']);
};
