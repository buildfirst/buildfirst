'use strict';

var grunt = require('grunt');

// establishes a connection with the database server
module.exports = function(credentials, done){
  var mysql = require('mysql');
  var util = require('./util.js');

  // create a connection to MySQL using the provided credentials
  var connection = mysql.createConnection(credentials);
    
  grunt.log.write('Connecting to MySQL...');

  // connect to MySQL server
  connection.connect(function(err){
    // throw if the connection fails.
    util.handle(err);

    // return the connection to our callee
    done(connection);
  });
};