// In this case, `this` will stay the same across the scope chain,
// this is generally untrue, and often leads to confusion among
// amateur developers.

function scoping () {
  console.log(this);

  return function () {
    console.log(this);
  };
}

scoping()()
// <- Window
// <- Window


// A common work-around is to create a local variable which holds
// onto the reference to `this`, and isn't shadowed in the child scope.
// The child scope shadows `this`, making it impossible to access
// a reference to the parent `this` directly

function retaining () {
  var self = this;

  return function () {
    console.log(self);
  };
}
