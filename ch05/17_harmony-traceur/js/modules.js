'use strict';

// this is how we declare a module in ES6
module chickenCoup {

  // variables are scoped to the module
  var chickens = [];

  // exported objects become the public API of our module
  export function hatch () {
    console.log('An egg is hatching!');
    chickens.push({
      eggs: 3
    });
  };

  export function getChicken (id) {
    return chickens[id];
  };
}

// note imported methods are part of the current context
// in this case, that's the global namespace
import * from chickenCoup;

// we can hatch
hatch();

// we can get chicken!
var chicken = getChicken(0);

console.log(chicken.eggs);
// <- 3
