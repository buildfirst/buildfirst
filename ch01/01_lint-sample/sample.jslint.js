function compose_ticks_count (start) {
  'use strict';

  // improved readability
  if (!start) { start = 1; }

  // still using this
  this.counter = start;

  // removed unused time argument
  return function () {
    // constructor parenthesis
    var ticks = +new Date(), // use a comma to keep jslint from complaining

        // `this` will be scoped to the parent function, and not really do what we intended
        // jslint didn't catch that, though!
        result = ticks + '_'  + this.counter;

    // increase the counter explicitly, after calculating the result
    this.counter += 1;

    return result;
  };
}
