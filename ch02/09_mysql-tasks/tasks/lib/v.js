'use strict';

var grunt = require('grunt');
var util = require('./util.js');

function ensure(connection, done){
  var query = 'create table if not exists __v (' +
    'file varchar(2000),' +
    'applied bit(1)' +
  ');';

  grunt.log.write('Checking __v table...');

  // make sure the version table exists, or create it
  connection.query(query, function(err){
    // throw if the query fails
    util.handle(err);

    // table exists, return
    done();
  });
}

module.exports = {
    getApplied: function(connection, done){
      ensure(connection, function(){
        grunt.log.write('Querying __v...');

        // query applied scripts
        connection.query('select file from __v where applied = 1', function(err, results){

          // throw if query fails
          util.handle(err);

          // return results
          done(results);
        });
      });
    },
    applied: function(connection, file, done){
      grunt.log.write('Updating __v...');

      var sql = 'insert into __v (file, applied) values (?,1)';

      // insert the new record
      connection.query(sql, [file], function(err){

        // throw if query fails
        util.handle(err);

        // we're done!
        done();
      });
    }
};