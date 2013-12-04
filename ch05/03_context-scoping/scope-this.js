// In this case, `this` will stay the same across the scope chain,
// this is generally untrue, and often leads to confusion among
// amateur developers.

function scoping () {
  console.log(this);

  return function () {
    console.log(this);
  };
}

scoping()();
// <- Window
// <- Window


// A common work-around is to create a local variable which holds
// onto the reference to `this`, and isn't shadowed in the child scope.
// The child scope shadows `this`, making it impossible to access
// a reference to the parent `this` directly.

function retaining () {
  var self = this;

  return function () {
    console.log(self);
  };
}

retaining()();
// <- Window


// Unless you really want to use both the parent scope's `this`,
// as well as the current value of `this` for some obscure reason,
// the preferred approach is using the `.bind` method in order to
// assign the parent `this` to the child scope.

function bound () {
  return function () {
    console.log(this);
  }.bind(this);
}

bound()();
// <- Window
