// variables declared on the top-most scope won't become globals
var something = {
  foo: 'bar'
};

// instead, globals need to be explicitly declared in Common.JS modules
global.thing = something;

// our module's public interface is `module.exports`
module.exports = {
  bar: 'baz'
};

// thus, when our module is required, its contents will be executed, and
// then we get access to only the public interface

// modules have access to global variables such as __dirname
console.log(__dirname);
// <- this file's directory name

// see http://nodejs.org/api/globals.html#globals_dirname for a full list of globals
