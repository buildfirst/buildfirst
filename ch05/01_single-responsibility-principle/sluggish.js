'use strict';

var sluggish = require('./sluggish-module.js');
var article = {
  date: new Date('2013-11-29T20:42:13.922Z'),
  title: '... Foo Some   Poorly Worded----   -  Text-?'
};

var url = sluggish(article);

// <- /1385757733922/poorly-worded-text
console.log(url);
