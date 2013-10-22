function compose_ticks_count (start) {
  'use strict';

  if (!start) { start = 1; }

  // use a closure to return a different scope every time
  return (function () {
    // this counter is visible only to the resulting function
    var counter = start;

    return function () {
      var ticks = +new Date(),
          result = ticks + '_'  + counter;

      // using this wasn't appropriate for our snippet
      counter += 1;

      return result;
    };
  })();
}
