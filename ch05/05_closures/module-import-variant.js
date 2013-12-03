// Similar to modules.js, except we don't assign to a variable
// Instead, we take the global object and add to it, or augment it
(function(window){
  // just the same, private things
  var privateThing;

  function privateMethod () {
  }

  // We expose accessible properties on the global object, for consumers to use
  window.api = {
      // Public interface
  };

// Here, we take references to variables external to our scope
})(window);
