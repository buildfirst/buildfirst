// Assigning the result of an IIFE to a variable is known as the module pattern
var api = (function(){
  // Private and in-place!
  var local = 0;

  // This function won't be accessible outside of the module scope
  function privateCounter () {
    return ++local;
  }

  // What you return here will be assigned to the `api` variable
  // Think of it as our module's public interface
  return {
    counter: privateCounter
  };
})();

api.counter();
// <- 1
api.counter();
// <- 2

// Can't really do anything else without access to the module's child scope.
// This is information hiding at its finest!
