var Prom = require('es6-promise').Promise;

var promise = new Prom(function (fulfill, reject) {
  console.log('Pending...');

  setTimeout(function () {
    fulfill('[0,1,2,3]');
  }, 1000);
});

// thenables can be chained
promise
  .then(function (result) {
    return JSON.parse(result);
  })
  .then (function (result) {
    console.log(result);
  });

// you can even make that into a shortcut
// to improve readability
promise
  .then(JSON.parse)
  .then(function (result) {
    console.log(result);
  });
