'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ec2: 'ec2.json'
  });
  
  grunt.loadNpmTasks('grunt-ec2');
  
  // build, then deploy using ec2_deploy:where
};
