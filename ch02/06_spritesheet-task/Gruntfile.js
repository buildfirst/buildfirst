'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    sprite: {
      icons: {
        src: 'public/img/icons/*.png',
        destImg: 'build/img/icons.png',
        destCSS: 'build/css/icons.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-spritesmith');
};