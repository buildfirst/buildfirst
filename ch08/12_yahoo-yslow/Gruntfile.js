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
          { src: 'https://ponyfoo.com/bf' }
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-yslow');
};
