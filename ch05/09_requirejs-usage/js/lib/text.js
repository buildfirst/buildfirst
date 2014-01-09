// this defines a module which depends on [], that is, it has no dependencies.
// if it had any, their names should be added to the array, and we'd receive them
// in the callback function in the second argument.
// other modules can depend on this one by the key 'lib/text', which is the path
// to this module, relative to the entry point.
define([], function () {

  // AMD modules should return a function which defines the interface for the module.
  return function (input) {
    return input.toUpperCase();
  };
});
