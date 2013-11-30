'use strict';

function getSlug (text) {
  var separator = /[^a-z0-9]+/ig;
  var drop = /^-|-$/g;

  return text
    .replace(separator, '-')
    .replace(drop, '')
    .toLowerCase();
}

function stamp (date) {
  return date.valueOf();
}

function filter (text) {
  var keywords = /(^|[^a-z0-9])some|foo|the|by|for|poor([^a-z0-9]|$)/ig;
  return text.replace(keywords, '');
}

var article = {
  date: new Date('2013-11-29T20:42:13.922Z'),
  title: '... Foo Some   Poorly Worded----   -  Text-?'
};

var relevant = filter(article.title);
var slug = getSlug(relevant);
var time = stamp(article.date);
var url = '/' + time + '/' + slug;

console.log(url);
// <- '/1385757733922/poorly-worded-text'
