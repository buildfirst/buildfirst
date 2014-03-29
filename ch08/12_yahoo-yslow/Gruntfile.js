module.exports = function (grunt) {
  grunt.initConfig({
    yslow: {
      options: {
        thresholds: {
          weight: 1000,
          speed: 5000,
          score: 80,
          requests: 30
        }
      },
      buildfirst: {
        files: [
          { src: 'http://bevacqua.io/bf' }
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-yslow');
};
