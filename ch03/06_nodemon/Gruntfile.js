'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    clean: {
      build: 'build'
    },

    jshint: {
      client: {
        src: ['public/js/**/*.js'],
        options: {
          jshintrc: 'public/.jshintrc'
        }
      },
      build: {
        src: ['Gruntfile.js'],
        options: {
          jshintrc: '.jshintrc'
        }
      },
      server: {
        src: ['app.js'],
        options: {
          jshintrc: '.jshintrc'
        }
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

    copy: {
      js_debug: {
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
    },

    watch: {
      // lint js files when they change, and then copy them over to build directory
      js: {
        files: ['public/js/**/*.js'],
        tasks: ['jshint:client', 'copy:js_debug']
      },

      lint_server: {
        files: ['app.js'],
        tasks: ['jshint:server']
      },

      // run the less:debug task if a less file changes
      less: {
        files: ['public/css/**/*.less'],
        tasks: ['less:debug']
      },

      // run the jade:debug task if a jade file changes
      jade: {
        files: ['public/views/**/*.jade'],
        tasks: ['jade:debug']
      },

      // run the whole build again if the process changes
      rebuild: {
        files: ['Gruntfile.js'],
        tasks: ['jshint:build', 'build:debug']
      }
    },

    nodemon: {
      dev: {
        script: 'app.js'
      }
    },

    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('build:debug', 'Lint and compile', [
    'clean', 'jshint', 'less:debug', 'jade:debug', 'copy:js_debug'
  ]);

  grunt.registerTask('build:release', 'Lint, compile, bundle, and optimize', [
    'clean', 'jshint', 'less:release', 'jade:release', 'concat:release', 'uglify:release'
  ]);

  grunt.registerTask('dev', ['build:debug', 'concurrent']);
};
