module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      browser: ['**/*.js', '!node_modules/**/*']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
};
