'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: 'build'
    },
    requirejs: {

      // these defaults will be used as a base for every target we define
      options: {
        // the name is used to find js/amd/app.js, basically
        name: 'app',

        // this should be set to the path from your project root to the
        // root of your AMD JavaScript files.
        baseUrl: 'js/amd',

        // where we want the compilation result to go
        out: 'build/js/app.min.js'
      },

      debug: {

        // These options also get merged with the defaults defined above
        options: {

          // for some reason, generating source maps requires this to be off
          // and it's on by default...
          preserveLicenseComments: false,

          // we want source maps because we're bundling everything together
          // learn more about source maps here:
          // http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/
          generateSourceMaps: true,

          // also required by the generateSourceMaps option
          optimize: 'none'
        }
      },

      // This target will inherit the default options, which is
      // enough for us. The defaults are tuned to optimize.
      release: {}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('build:debug', ['clean', 'requirejs:debug']);
  grunt.registerTask('build:release', ['clean', 'requirejs:release']);
};
