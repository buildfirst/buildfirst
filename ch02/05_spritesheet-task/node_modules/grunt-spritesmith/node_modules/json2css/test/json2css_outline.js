module.exports = {
  'An array of image positions, dimensions, and names': {
    'processed into JSON': {
      'matches as expected': true,
      'is valid JSON': true
    },
    'processed into CSS': {
      'matches as expected': true,
      'is valid CSS': true
    },
    'processed into Stylus': {
      'matches as expected': true,
      'is valid Stylus': true
    },
    'processed into LESS': {
      'matches as expected': true,
      'is valid LESS': true
    },
    'processed into SASS': {
      'matches as expected': true,
      'is valid SASS': true
    },
    'processed into SCSS': {
      'matches as expected': true,
      'is valid SCSS': true
    }
  },
  'An object of image positions and dimensions keyed by names': {
    'processed into JSON': {
      'is deep equal to expected': true,
      'is valid JSON': true
    }
  }
};
