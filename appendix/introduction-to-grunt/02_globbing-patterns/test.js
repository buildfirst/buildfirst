var _ = require('lodash');
var path = require('path');
var chalk = require('chalk');
var glob = require('glob');
var cases = [
  ['something', '!something', []],
  ['!something', 'something', ['something']],
  ['things/a{,nother}/thing', ['things/a/thing', 'things/another/thing']],
  ['things/**/*', '!things', ['things/a', 'things/a/thing', 'things/another', 'things/another/thing']],
  ['things', ['things']],
  ['things', '!things/another', ['things']],
  ['things/**/*', '!things', []],
  ['things/**/*', '!things/a', []],
  ['things/**/*', '!things/**/*', []]
];
function test (patterns) {
  var expected = patterns.pop();
  var actual = expand(patterns);
  match(expected, actual, patterns);
}
function is (a, b) {
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function match (expected, actual, patterns) {
  var format = 'Matching %s\nExpected %s\nActual   %s\n%s\n';
  var passing = is(expected, actual) ? chalk.green('Passing') : chalk.red('Failing');
  console.log(format, JSON.stringify(patterns), JSON.stringify(expected), JSON.stringify(actual), passing);
}
// Adapted from grunt's source (mostly replaced grunt.util._ with _, really)
// https://github.com/gruntjs/grunt/blob/8b40e01205404fcf4512351b5ac9bb7680b6280e/lib/grunt/file.js#L49-L69
function expand (patterns) {
  // Filepaths to return.
  var result = [];
  // Iterate over flattened patterns array.
  _.flatten(patterns).forEach(function(pattern) {
    // If the first character is ! it should be omitted
    var exclusion = pattern.indexOf('!') === 0;
    // If the pattern is an exclusion, remove the !
    if (exclusion) { pattern = pattern.slice(1); }
    // Find all matching files for this pattern.
    var matches = glob.sync(pattern, { cwd: path.join(__dirname, 'fixture') });
    if (exclusion) {
      // If an exclusion, remove matching files.
      result = _.difference(result, matches);
    } else {
      // Otherwise add matching files.
      result = _.union(result, matches);
    }
  });
  return result;
}
cases.forEach(test);
