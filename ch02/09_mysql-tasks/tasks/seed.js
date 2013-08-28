'use strict';

var path = require('path');
var async = require('async');

module.exports = function(grunt){
  grunt.registerTask('db_seed', 'Populates a database with seed data', function(){
    var connect = require('./lib/connect.js');
    var util = require('./lib/util.js');

    // tell grunt we'll let them know when we're done
    var done = this.async();

    // take the configuration provided to `initConfig`
    var options = this.options({});

    // establish a connection with MySQL server
    connect(options.credentials, seed);
    
    function seed(connection){
      grunt.log.write('Switching to \"' + options.db + '\" db...');

      // switch to the database
      connection.query('use ' + options.db, function(err){
        
        // throw if the query fails
        util.handle(err);

        // join scripts folder with globbing pattern
        var seeds = path.join(options.scripts, '**/*.seed.sql');

        // expand the pattern
        var files = grunt.file.expand(seeds);

        grunt.log.writeln(files.length ? files.length : 'no', 'seed script(s) found.');

        // loop through the update scripts in series
        async.eachSeries(files, function(file, next){
          grunt.log.write('Applying "' + file + '"...');

          // read the script.seed.sql file
          var sql = grunt.file.read(file);

          connection.query(sql, function(err){
            // check for errors
            util.handle(err);

            // continue with the next script
            next();
          });

        }, function(){
          // let grunt know we're done
          done();
        });

      });
    }
  });
};