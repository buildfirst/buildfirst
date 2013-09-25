'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    clean: {
      bin: 'bin'
    },

    jshint: {
      me: ['Gruntfile.js']
    },

    pem_gen: {

    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-pemcrypt');
};