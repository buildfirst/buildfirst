module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      // this will actually just match the Gruntfile.js file itself
      browser: ['**/*.js', '!node_modules/**/*']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
};
