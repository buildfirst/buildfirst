// If the method is invoked on an object, that object will be used as `this`.

var parent = {
    method: function () {
        console.log(this);
    }
};

parent.method();
// <- parent

// Note that this behavior is very "fragile", if you get a reference to method, and
// invoke that, then `this` won't be `parent` anymore, but rather the
// global object once again. This confuses most developers.

var parentless = parent.method;

parentless();
// <- Window

// The bottom line is you should look at the call site to figure out whether the
// function is invoked as a property of an object or on its own. If it's invoked
// as a property, then that property will become `this`, otherwise `this` will be
// assigned the value of the global object, or `window`. In this case,
// but under strict mode, `this` will be `null` instead.

// In the case of constructor functions, `this` is assigned to the
// instance that's being created, when using the `new` keyword.

function ThisClownCar () {
  console.log(this);
}

new ThisClownCar();
// <- ThisClownCar {}

// Note that this behavior doesn't have a way of telling a function is supposed
// to be used as a constructor function, and thus omitting the new keyword will
// result in `this` being the global object, like we saw in the `parentless` example.

ThisClownCar();
// <- Window
