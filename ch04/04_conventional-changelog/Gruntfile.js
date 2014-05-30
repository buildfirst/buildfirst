'use strict';

module.exports = function (grunt) {
  grunt.initConfig({

    // used by the changelog task
    pkg: grunt.file.readJSON('package.json'),

    bump: {
      options: {
        // after bumping, update it so that the changelog task uses same version number
        updateConfigs: ['pkg'],

        // commit CHANGELOG.md as well
        commitFiles: ['package.json', 'CHANGELOG.md']
      }
    },

    changelog: {
      options: {
        // change this to whatever editor you want to use
        editor: 'sublime -w',

        // taken from package.json by default,
        // explicitly added here just so the example works
        github: 'https://github.com/buildfirst/buildfirst.git'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-conventional-changelog');

  // should also bump-commit, left it out so you can play with it as-is.
  grunt.registerTask('notes', ['bump-only', 'changelog']);
};
