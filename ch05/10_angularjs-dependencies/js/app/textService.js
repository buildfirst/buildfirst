var app = angular.module('testApp');

app.factory('textService', [
  function () {
    'use strict';

    return function (input) {
      return input.toUpperCase();
    };
]);
