var assert = require('assert');
var compute = require('../src/compute.js');

describe('compute()', function () {
  it('should multiply by 555', function () {
    assert.equal(1665, compute(3));
  });
});
