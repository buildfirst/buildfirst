module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      browser: ['public/js/**/*.js']
    },
    cssmin: {
      combine: {
        files: { 'build/css/all.min.css': ['public/css/**/*.css'] }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('build', ['cssmin']);
};
