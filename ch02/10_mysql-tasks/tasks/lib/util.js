'use strict';

var grunt = require('grunt');

module.exports = {
    handle: function(err){
        if(err){
          grunt.log.writeln('failed.');
          grunt.fatal(err);
        }

        grunt.log.writeln('done.');
    }
};