require(['lib/text'], function(text) {
  var result = text('foo bar');
  console.log(result);
  // <- 'FOO BAR'
});
