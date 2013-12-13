// this is the entry point of our RequireJS application, as such
// we use the require function, determining our dependencies,
// and then just executing our code.
// in this case, we depend on 'lib/text', and that will be passed
// to the callback function as the first argument.
require(['lib/text'], function(text) {
  var result = text('foo bar');
  console.log(result);
  // <- 'FOO BAR'
});
