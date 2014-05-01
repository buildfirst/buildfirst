var path = require('path');

module.exports = function (grunt) {
  grunt.initConfig({

    clean: ['app/templates/compiledTemplates.js', 'public/bundle.js'],

    handlebars: {
      compile: {
        options: {
          namespace: false,
          commonjs: true,
          processName: function (filename) {
            return filename.replace('app/templates/', '').replace('.hbs', '');
          }
        },
        src: 'app/templates/**/*.hbs',
        dest: 'app/templates/compiledTemplates.js',
        filter: function(filepath) {
          var filename = path.basename(filepath);
          // Exclude files that begin with '__' from being sent to the client,
          // i.e. __layout.hbs.
          return filename.slice(0, 2) !== '__';
        }
      }
    },

    watch: {
      scripts: {
        files: 'app/**/*.js',
        tasks: ['browserify'],
        options: {
          interrupt: true
        }
      },
      templates: {
        files: 'app/**/*.hbs',
        tasks: ['handlebars'],
        options: {
          interrupt: true
        }
      }
    },

    browserify: {
      options: {
        debug: true,
        alias: ['node_modules/rendr-handlebars/index.js:rendr-handlebars'],
        aliasMappings: [{
          cwd: 'app/',
          src: ['**/*.js'],
          dest: 'app/'
        }],
        shim: {
          jquery: {
            path: 'assets/vendor/jquery-1.9.1.min.js',
            exports: '$'
          }
        }
      },
      app: {
        src: ['app/**/*.js'],
        dest: 'public/bundle.js'
      }
    },

    nodemon: {
      dev: {
        script: 'app.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean', 'handlebars', 'browserify']);
  grunt.registerTask('run', ['build', 'nodemon', 'watch']);
};

