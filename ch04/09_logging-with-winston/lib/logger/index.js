'use strict';

var winston = require('winston');
var api = module.exports = {};
var levels = ['debug', 'info', 'warn', 'error'];

// expose just the logging methods as our interface
levels.forEach(function(level){
    api[level] = winston[level].bind(winston);
});

// configure the logging transports
require('./transports.js');
