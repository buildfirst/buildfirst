module chickenCoup {
  var chickens = [];

  export function hatch () {
    console.log('An egg is hatching!');
    chickens.push({
      eggs: 3
    });
  };

  export function getChicken (id) {
    return chickens[id];
  };
};

import * from chickenCoup;

// DOCUMENTATION








hatch();

var chicken = getChicken(0);

console.log(chicken.eggs);
// <- 3
