function flow (steps, done) {
  function next () {
    var used; // store whether the callback has already been used
    return function () { // use a factory so that used is local to each step
      if (used) { return; } // after one use, next becomes a no-op
      used = true;
      var step = steps.shift(); // get the next step, and remove it from the list
      if (step) { // are there more steps?
        var args = Array.prototype.slice.call(arguments); // cast arguments to an array
        var err = args.shift(); // get the error argument, remove it from the arguments
        if (err) { done(err); return; } // if an error was provided, short-circuit
        args.push(next()); // add a completion callback to the argument list
        step.apply(null, args); // invoke the step passing it the needed arguments
      } else { // no more steps, just call done
        done.apply(null, arguments); // no need to manipulate arguments here
      }
    };
  }
  var start = next(); // create the first step function
  start(); // execute the step, don't provide any additional arguments
}
