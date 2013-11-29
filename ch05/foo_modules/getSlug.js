'use strict';

module.exports = function (text) {
  var separator = /[^a-z0-9]+/ig;
  var drop = /^-|-$/g;

  return text
    .replace(separator, '-')
    .replace(drop, '')
    .toLowerCase();
};
