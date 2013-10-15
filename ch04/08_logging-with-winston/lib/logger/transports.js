'use strict';

var fs = require('fs');
var path = require('path');
var winston = require('winston');

// path to the logs directory, relative to this file
var logs = path.resolve(__dirname, '../../logs');

// create the logs directory, winston won't
try{ fs.mkdirSync(logs); } catch (e) {}

// add a file transport, logging to that file
winston.add(winston.transports.File, {
  filename: 'logs/persistent.json'
});
