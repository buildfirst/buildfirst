require(['lib/text'], function(text) {
  'use strict'

  var result = text('foo bar');
  console.log(result);
  // <- 'FOO BAR'
});
