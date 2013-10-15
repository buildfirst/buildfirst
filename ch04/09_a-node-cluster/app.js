'use strict';

var util = require('util');
var chalk = require('chalk');
var w = chalk.cyan(util.format('[w%s]', process.pid));
var lifetime = Math.random() * 5000 + 500;

console.log(w, 'application online!');

// crash and burn after a while
setTimeout(oops, lifetime);

function oops () {
  console.log(w, 'something went awfully wrong.');
  process.exit(1);
}
