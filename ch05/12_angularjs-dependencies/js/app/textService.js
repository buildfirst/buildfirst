// here we're just grabbing a reference to the testApp module
var app = angular.module('testApp');

// we add a service to the module, called textService
app.factory('textService', [

  // if we don't have any dependencies, then the array should just have
  // the function which puts together our service, and then returns something
  // which will be returned when the service is requested.
  // note that, in the case of services, these are singletons. so everyone who
  // uses the service will get back the same reference.
  function () {
    return function (input) {
      return input.toUpperCase();
    };
  }
]);
