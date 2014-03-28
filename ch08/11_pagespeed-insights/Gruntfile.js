module.exports = function (grunt) {
  grunt.initConfig({
    pagespeed: {
      desktop: {
        url: "http://bevacqua.io/bf",
        locale: "en_US",
        strategy: "desktop",
        threshold: 80
      },
      mobile: {
        url: "http://bevacqua.io/bf",
        locale: "en_US",
        strategy: "mobile",
        threshold: 70
      },
      options: {
        key: process.env.PAGESPEED_KEY
      }
    }
  });
  grunt.loadNpmTasks('grunt-pagespeed');
};
