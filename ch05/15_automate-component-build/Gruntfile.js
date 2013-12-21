'use strict';

module.exports = function (grunt) {
  grunt.initConfig({

    clean: {
      components: 'components',
      build: 'js/components'
    },

    componentbuild: {

      debug: {
        options: {
         dev: true,
         sourceUrls: true
        },
        src: '.',
        dest: 'js/components'
      },

      release: {
        src: '.',
        dest: 'js/components'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-component-build');

  grunt.registerTask('build:debug', ['clean:build', 'componentbuild:debug']);
  grunt.registerTask('build:release', ['clean:build', 'componentbuild:release']);
};
