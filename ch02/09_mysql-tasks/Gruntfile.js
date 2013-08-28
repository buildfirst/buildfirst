'use strict';

// the credentials we use to connect to our MySQL server
var options = require('./db.json');

module.exports = function(grunt){
  grunt.initConfig({
    db_create: {
      options: options
    },
    db_upgrade: {
      options: options
    }
  });

  // load all the tasks in the `tasks/` folder
  grunt.loadTasks('./tasks');
};