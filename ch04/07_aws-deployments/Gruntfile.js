'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ec2: 'ec2.json'
  });
  
  grunt.loadNpmTasks('grunt-ec2');
  
  // deploy using ec2_deploy:somewhere
  
  // in real apps, we should set up an alias to build and then deploy
  // like so: grunt.registerTask('deploy', ['build:release', 'ec2_deploy:somewhere']);
};
