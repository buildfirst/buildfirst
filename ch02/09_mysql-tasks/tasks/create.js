'use strict';

module.exports = function(grunt){
  grunt.registerTask('db_create', 'Creates the database for the first time', function(){
    var connect = require('./lib/connect.js');
    var util = require('./lib/util.js');

    // tell grunt we'll let them know when we're done
    var done = this.async();

    // take the configuration provided to `initConfig`
    var options = this.options({});

    // establish a connection with MySQL server
    connect(options.credentials, create);
    
    function create(connection){
      grunt.log.write('Creating \"' + options.db + '\" db...');

      // create the database
      connection.query('create database ' + options.db, function(err){

        // throw if the query fails.
        util.handle(err);

        // tell grunt we're done
        done();
      });
    }
  });
};