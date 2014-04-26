'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: ['build']
    },
    browserify: {
      options: {
        transform: ['brfs'],
        bundleOptions: {
          debug: true
        }
      },
      debug: {
        files: {
          'build/bundle.js': 'app/app.js'
        }
      },
      watch: {
        files: {
          'build/bundle.js': 'app/app.js'
        },
        options: {
          watch: true,
          keepAlive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('build', ['clean', 'browserify:debug']);
  grunt.registerTask('watch', ['build', 'browserify:watch']);
};
