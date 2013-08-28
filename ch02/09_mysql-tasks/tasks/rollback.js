'use strict';

var path = require('path');
var _ = require('underscore');

module.exports = function(grunt){
  grunt.registerTask('db_rollback', 'Rolls back the latest database schema change', function(){
    var connect = require('./lib/connect.js');
    var util = require('./lib/util.js');
    var v = require('./lib/v.js');

    // tell grunt we'll let them know when we're done
    var done = this.async();

    // take the configuration provided to `initConfig`
    var options = this.options({});

    // establish a connection with MySQL server
    connect(options.credentials, rollback);
    
    function rollback(connection){
      grunt.log.write('Switching to \"' + options.db + '\" db...');

      // switch to the database
      connection.query('use ' + options.db, function(err){
        
        // throw if the query fails
        util.handle(err);

        // join scripts folder with globbing pattern
        var down = path.join(options.scripts, '**/*.down.sql');

        // get a list of applied scripts
        v.getApplied(connection, function(records){

          // we need just the latest script
          var latest = _.pluck(records, 'file').pop();

          // are there any applied scripts left?
          if (!latest) {
            grunt.log.writeln('Nothing to roll back.');

            // let grunt know we're done            
            done();

          } else {
            
            // find the matching rollback script
            var file = latest.replace(/\.up\.sql$/i, '.down.sql');

            // if the file doesn't exist, we can't roll back
            if(!grunt.file.exists(file)){
              grunt.fatal('Rollback script not found: "' + file + '"');
            }

            grunt.log.write('Applying rollback for "' + file + '"...');

            // read the script.down.sql file
            var sql = grunt.file.read(file);

            connection.query(sql, function(err){
              // check for errors
              util.handle(err);

              // update the versioning table
              v.rollback(connection, latest, function(){

                // let grunt know we're done
                done();
              });

            });

          }

        });

      });
    }
  });
};