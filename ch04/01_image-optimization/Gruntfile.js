'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

    clean: {
      build: 'build'
    },

    copy: {
      images: {
        expand: true,
        cwd: 'public/img',
        src: '**/*.jpg',
        dest: 'build/img/'
      }
    },

    less: {
      debug: {
        files: {
          'build/css/layout.css': 'public/css/layout.less',
          'build/css/home.css': 'public/css/home.less'
        }
      },
      release: {
        options: {
          yuicompress: true
        },
        files: {
          'build/css/all.css': 'public/css/**/*.less'
        }
      }
    },

    jade: {
      debug: {
        options: {
          pretty: true,
          data: {
            debug: true
          }
        },
        files: {
          'build/views/home.html': 'public/views/home.jade'
        }
      },
      release: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          'build/views/home.html': 'public/views/home.jade'
        }
      }
    },

    imagemin: {
      release: {
        files: [{
          expand: true,
          src: 'build/img/**/*.jpg'
        }],
        options: {
          progressive: true // progressive jpgs
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('build:debug', ['clean', 'less:debug', 'jade:debug', 'copy:images']);
  grunt.registerTask('build:release', ['clean', 'less:release', 'jade:release', 'copy:images', 'imagemin:release']);
};