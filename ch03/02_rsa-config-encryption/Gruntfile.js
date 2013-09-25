'use strict';

var util = require('util');
var path = require('path');

// cwd == current working directory: the project root
var cwd = process.cwd();

// we'll store the private key somewhere safe, like bin/private
// bin/private should be explicitly ignored in `.gitignore`
var pemkey = function (name) {
  var filename = util.format('bin/private/%s.pem', name);
  return path.join(cwd, filename);
};

module.exports = function(grunt){
  grunt.initConfig({
    clean: {
      bin: 'bin'
    },

    jshint: {
      me: ['Gruntfile.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // generates the private key
    pem_gen: {
      // we always use one key for each individual file
      foo: { pem: pemkey('foo') },
      bar: { pem: pemkey('bar') }
    },

    // encrypts the plain file, necessary to update the secure version
    pem_encrypt: {
      foo: { pem: pemkey('foo'), store: 'foo' },
      bar: { pem: pemkey('bar'), store: 'bar' }
    },

    // decrypts the secure file, making it usable
    pem_decrypt: {
      foo: { pem: pemkey('foo'), store: 'foo' },
      bar: { pem: pemkey('bar'), store: 'bar' }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // load the encryption tasks
  grunt.loadNpmTasks('grunt-pemcrypt');
};