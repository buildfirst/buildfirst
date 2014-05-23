'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: ['build']
    },
    browserify: {
      options: {
        debug: true
      },
      debug: {
        files: {
          'build/bundle.js': 'app/app.js'
        }
      }
    },
    watch: {
      app: {
        files: 'app/app.js',
        tasks: ['browserify'],
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean', 'browserify:debug']);
  grunt.registerTask('default', ['build', 'watch:app']);
};
