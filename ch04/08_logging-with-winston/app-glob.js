'use strict';

// load globals
require('./lib/globals.js');

logger.info('Process ID is %s.', process.pid);
logger.warn('Using globals we don\'t need a reference to `logger` in every script');
