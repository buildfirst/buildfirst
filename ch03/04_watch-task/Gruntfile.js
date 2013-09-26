'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    clean: {
      build: 'build'
    },

    jshint: {
      client: ['public/js/**/*.js']
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

    copy: {
      debug: {
        expand: true,
        cwd: 'public/js',
        src: '**/*.js',
        dest: 'build/js/'
      }
    },

    concat: {
      release: {
        files: {
          'build/js/bundle.js': 'public/js/**/*.js'
        }
      }
    },

    uglify: {
      release: {
        files: {
          'build/js/all.min.js': 'build/js/bundle.js'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build:debug', 'Lint and compile', [
    'clean', 'jshint', 'less:debug', 'jade:debug', 'copy:debug'
  ]);

  grunt.registerTask('build:release', 'Lint, compile, bundle, and optimize', [
    'clean', 'jshint', 'less:release', 'jade:release', 'concat:release', 'uglify:release'
  ]);
};