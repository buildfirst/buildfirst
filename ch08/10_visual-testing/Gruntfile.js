module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      all: 'build'
    },
    photobox: {
      buildfirst: {
        options: {
          urls: ['https://ponyfoo.com/bf'],
          indexPath: 'build/photobox',
          screenSizes: ['320', '960', '1440']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-photobox');
};
