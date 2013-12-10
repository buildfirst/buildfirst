define([], function () {
  'use strict';

  return function (input) {
    return typeof input === 'string' ? input.toUpperCase() : '';
  };
});
