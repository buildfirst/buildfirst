// If the method is invoked on an object, that object will be used as `this`.

var parent = {
    method: function () {
        console.log(this);
    }
};

parent.method();
// <- parent

// Note that this is very fragile, if you get a reference to method, and
// invoke that, then `this` won't be `parent` anymore, but rather the
// global object once again.

var parentless = parent.method;

parentless();
// <- Window
