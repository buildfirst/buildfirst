var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({

    clean: ['app/templates/compiledTemplates.js', 'public/bundle.js'],

    handlebars: {
      compile: {
        options: {
          namespace: false,
          commonjs: true,
          processName: function(filename) {
            return filename.replace('app/templates/', '').replace('.hbs', '');
          }
        },
        src: 'app/templates/**/*.hbs',
        dest: 'app/templates/compiledTemplates.js',
        filter: function(filepath) {
          // exclude templates that begin with '__' from being sent to the client
          // e.g '__layout.hbs'
          var filename = path.basename(filepath);
          return filename.slice(0, 2) !== '__';
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

    watch: {
      options: {
        interrupt: true
      },
      scripts: {
        files: 'app/**/*.js',
        tasks: ['browserify']
      },
      templates: {
        files: 'app/**/*.hbs',
        tasks: ['handlebars']
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

  grunt.registerTask('compile', ['clean', 'handlebars', 'browserify']);
  grunt.registerTask('server', ['compile', 'nodemon', 'watch']);
  grunt.registerTask('default', ['compile']);
};

