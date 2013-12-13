// here we're just grabbing a reference to the testApp module
var app = angular.module('testApp');

// we add a controller to the module, called testController
app.controller('testController', [
  // this module depends on the textService service, so we add that
  'textService',

  // the last element in the array should be a function which is the
  // controller itself, and it will get injected with all the dependnecies
  // we asked for. In this case, textService gets injected as the first argument
  function (text) {

    var result = text('foo bar');
    console.log(result);
    // <- 'FOO BAR'
  }
]);
