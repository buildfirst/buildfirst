# Getting Started

[![grunt.png][2]][1]

Install Grunt using `npm`, in your terminal.

```shell
npm install -g grunt-cli
```

This example just showcases what we've talked about in the appendix: **Introduction to Grunt** when introducing the Grunt tool. Below is all the configuring we need to do.

```js
module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      browser: ['**/*.js', '!node_modules/**/*']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
};
```

To run the example, you can just type `grunt` into your terminal.

If you want to learn a bit more about globbing patterns, please head over [to the next sample][3].

  [1]: http://gruntjs.com "Grunt: JavaScript Task Runner"
  [2]: http://i.imgur.com/bCRhgh1.png "Welcome to Grunt!"
  [3]: https://github.com/buildfirst/buildfirst/tree/master/appendix/introduction-to-grunt/02_globbing-patterns
