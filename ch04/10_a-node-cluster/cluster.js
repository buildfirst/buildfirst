'use strict';

var cluster = require('cluster');
var chalk = require('chalk');
var c = chalk.magenta('[cluster]');
var workers = 2;
var i;

console.log(c, 'online');

// setup cluster to fork `app.js` workers
cluster.setupMaster({
  exec: 'app.js'
});

// whenever a worker process exits
cluster.on('exit', function () {
  console.log(c, 'worker died, replacing...');

  // fork a new worker process
  cluster.fork();
});

for (i = 0; i < workers; i++) {
  cluster.fork();
}
