// This is a real bug I had to track down once upon a time.
// Here, the issue was that we were re-declaring the path variable.
// What's worse, due to hoisting, path would become undefined if !something
// This resulted in unexpected behavior.
// It also goes to show how much better it would've been to stick
// to a pattern where we "hoist" variables ourselves, rather than waiting
// on the language to do it for us. Writing code like that would improve
// the visibility of potential issues such as the one below.

var path = require('path');

// ...

module.exports = function (something) {
  // ...

  if (something) {
    var path = require('path');
    // ...
  }

  // ...
};
