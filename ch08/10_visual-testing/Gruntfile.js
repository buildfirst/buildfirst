module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      all: 'build'
    },
    photobox: {
      bevacqua: {
        options: {
          urls: ['http://bevacqua.io', 'http://bevacqua.io/bf', 'http://blog.ponyfoo.com/2013/03/12/introduction-to-seo-and-content-indexing'],
          indexPath: 'build/photobox',
          screenSizes: ['320', '960', '1440']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-photobox');
};
