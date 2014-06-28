var test = require('tape');
var sample = require('../sample');
var text = 'This is some text!';

test('text should match expectation', function (t) {
  t.equal(sample, text);
});
