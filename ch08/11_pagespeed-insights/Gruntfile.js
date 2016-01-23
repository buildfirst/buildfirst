module.exports = function (grunt) {
  grunt.initConfig({
    pagespeed: {
      desktop: {
        url: 'https://ponyfoo.com/bf',
        locale: 'en_US',
        strategy: 'desktop',
        threshold: 80
      },
      mobile: {
        url: 'https://ponyfoo.com/bf',
        locale: 'en_US',
        strategy: 'mobile',
        threshold: 70
      },
      options: {
        key: process.env.PAGESPEED_KEY
      }
    }
  });
  grunt.loadNpmTasks('grunt-pagespeed');
};
