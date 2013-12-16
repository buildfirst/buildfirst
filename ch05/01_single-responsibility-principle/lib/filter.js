'use strict';

var keywords = /\bsome|foo|the|by|for|poor\b/ig;

module.exports = function (text) {
  return text.replace(keywords, '');
};
