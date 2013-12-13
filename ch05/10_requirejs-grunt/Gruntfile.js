'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: 'build'
    },
    requirejs: {
      options: {
        name: 'app',
        baseUrl: 'js/amd',
        out: 'build/js/app.min.js'
      },
      debug: {
        options: {
          preserveLicenseComments: false,
          generateSourceMaps: true,
          optimize: 'none'
        }
      },
      release: {}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('build:debug', ['clean', 'requirejs:debug']);
  grunt.registerTask('build:release', ['clean', 'requirejs:release']);
};
