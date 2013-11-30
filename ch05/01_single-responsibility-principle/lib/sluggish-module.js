'use strict';

var getSlug = require('./getSlug.js');
var stamp = require('./stamp.js');
var filter = require('./filter.js');

module.exports = function (article) {
  var relevant = filter(article.title);
  var slug = getSlug(relevant);
  var time = stamp(article.date);
  var url = '/' + time + '/' + slug;
  return url;
};
