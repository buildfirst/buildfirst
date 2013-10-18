'use strict';

// the credentials we use to connect to our MySQL server
var options = require('./db.json');

module.exports = function(grunt){
  grunt.initConfig({
    db_create: { options: options },
    db_upgrade: { options: options },
    db_rollback: { options: options },
    db_seed: { options: options }
  });

  // load all the tasks in the `tasks/` directory
  grunt.loadTasks('./tasks');

  // register a first time setup alias
  grunt.registerTask('db_setup', 'Create, update, and seed a new database', ['db_create', 'db_upgrade', 'db_seed']);
};
