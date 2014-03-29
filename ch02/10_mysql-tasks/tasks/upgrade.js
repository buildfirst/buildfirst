'use strict';

var path = require('path');
var async = require('async');
var _ = require('underscore');

module.exports = function(grunt){
  grunt.registerTask('db_upgrade', 'Executes and reverts database schema changes', function(){
    var connect = require('./lib/connect.js');
    var util = require('./lib/util.js');
    var v = require('./lib/v.js');

    // tell grunt we'll let them know when we're done
    var done = this.async();

    // take the configuration provided to `initConfig`
    var options = this.options({});

    // establish a connection with MySQL server
    connect(options.credentials, upgrade);

    function upgrade(connection){
      grunt.log.write('Switching to "' + options.db + '" db...');

      // switch to the database
      connection.query('use ' + options.db, function(err){

        // throw if the query fails
        util.handle(err);

        // join scripts directory with globbing pattern
        var up = path.join(options.scripts, '**/*.up.sql');

        // expand the pattern
        var unapplied = grunt.file.expand(up);

        // get a list of applied scripts
        v.getApplied(connection, function(records){

          // we need just the file names
          var applied = _.pluck(records, 'file');

          // remove applied scripts from the list
          var updates = unapplied.filter(function(script){
            return applied.indexOf(script) === -1;
          });

          grunt.log.writeln(updates.length ? updates.length : 'no', 'upgrade script(s) pending.');

          // loop through the update scripts in series
          async.eachSeries(updates, function(file, next){
            grunt.log.write('Applying "' + file + '"...');

            // read the script.up.sql file
            var sql = grunt.file.read(file);

            connection.query(sql, function(err){
              // check for errors
              util.handle(err);

              // update the versioning table
              v.upgrade(connection, file, function(){

                // continue with the next script
                next();
              });

            });

          }, function(){
            // let grunt know we're done
            done();
          });

        });

      });
    }
  });
};
