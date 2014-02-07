(function(){
  'use strict';

  var member = 0; // the 'member' variable is private to our closure

  window.foo = { // this is our public interface, tacked onto the global Window object.

    bar: function() {
        return member;
    },

    inc: function() {
        member++;
    },

    set: function(value) {
        member = value;
    }

  };
})(window);