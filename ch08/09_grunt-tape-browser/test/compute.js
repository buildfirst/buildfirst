var test = require('tape');
var compute = require('../src/compute.js');

test('compute() should multiply by 555', function (t) {
  t.equal(1665, compute(3));
  t.end();
});
