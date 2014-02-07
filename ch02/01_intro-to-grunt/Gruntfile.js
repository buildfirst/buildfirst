/* jshint node: true */
'use strict';

module.exports = function(grunt) {
  // configure Grunt
  grunt.initConfig({
    // files to lint with the JSHint task
    jshint: ['Gruntfile.js']
  });

  // load the module containing the JSHint task
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // register a default task to run JSHint
  // (allows `grunt` rather than `grunt jshint`)
  grunt.registerTask('default', ['jshint']);
};
