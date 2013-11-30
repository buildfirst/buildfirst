'use strict';

var keywords = /(^|[^a-z0-9])some|foo|the|by|for|poor([^a-z0-9]|$)/ig;

module.exports = function (text) {
  return text.replace(keywords, '');
};
