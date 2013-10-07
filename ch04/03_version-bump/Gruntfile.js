'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    bump: {
      options: {
        commit: false,
        createTag: false,
        push: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-bump');
};
