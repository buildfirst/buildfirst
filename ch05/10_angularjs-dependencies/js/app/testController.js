var app = angular.module('testApp');

app.controller('testController', [
  'textService',
  function (text) {
    'use strict'

    var result = text('foo bar');
    console.log(result);
    // <- 'FOO BAR'
  }
]);
