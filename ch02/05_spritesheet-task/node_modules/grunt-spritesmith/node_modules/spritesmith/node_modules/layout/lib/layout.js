// Load in packing.smith (from spritesmith) and create algorithm store
var PackingSmith = require('./smiths/packing.smith.js'),
    assert = require('assert'),
    algorithms = {};

/**
 * Layout adds items in an algorithmic fashion
 * @constructor
 * @param {String|Function} [algorithm="top-down"] Name of algorithm or custom algorithm to use
 * Algorithms available: top-down, left-right, diagonal, alt-diagonal, binary-tree
 */
function Layout(algorithmName) {
  // Save the algorithmName as our algorithm (assume function)
  var algorithm = algorithmName || 'top-down';

  // If the algorithm is a string, look it up
  if (typeof algorithm === 'string') {
    algorithm = algorithms[algorithmName];

    // Assert that the algorithm was found
    assert(algorithm, 'Sorry, the \'' + algorithmName +'\' algorithm could not be loaded.');
  }

  // Create a new PackingSmith with our algorithm and return
  var retSmith = new PackingSmith(algorithm);
  return retSmith;
}

// Expose PackingSmith on Layout
Layout.PackingSmith = PackingSmith;

/**
 * Method to add new algorithms via
 * @param {String} name Name of algorithm
 * @param {Function} algorithm Algorithm to bind under name
 */
function addAlgorithm(name, algorithm) {
  // Save the algorithm to algorithms
  algorithms[name] = algorithm;
}
// Make algorithms easier to add and expose them
Layout.addAlgorithm = addAlgorithm;
Layout.algorithms = algorithms;

// Add default algorithms
addAlgorithm('top-down', require('./algorithms/top-down.algorithm.js'));
addAlgorithm('left-right', require('./algorithms/left-right.algorithm.js'));
addAlgorithm('diagonal', require('./algorithms/diagonal.algorithm.js'));
addAlgorithm('alt-diagonal', require('./algorithms/alt-diagonal.algorithm.js'));
addAlgorithm('binary-tree', require('./algorithms/binary-tree.algorithm.js'));

// /**
//  * Method to add reverse algorithms via
//  * @param {String} reverseName Name of reverse algorithm
//  * @param {String} origName Name of original algorithm to reverse
//  */
// function addReverseAlgorithm(reverseName, origName) {
//   // Take the original algorithm
//   var algo = algorithms[origName];

//   // Asser there is an algorithm
//   assert(algo, 'Algorithm ' + origName + ' could not be found.');

//   // Wrap the algorithm in a reverser
//   function retFn(items) {
//     items = algo(items);
//     items.reverse();
//     return items;
//   }

//   // Add the algorithm
//   addAlgorithm(reverseName, retFn);
// }
// // // Add in reverse algorithms
// // addReverseAlgorithm('bottom-up', 'top-down');
// // addReverseAlgorithm('right-left', 'left-right');
// // addReverseAlgorithm('reverse-diagonal', 'diagonal');

// // Expose addReverseAlgorithm
// Layout.addReverseAlgorithm = addReverseAlgorithm;

// Expose Layout to the outside
module.exports = Layout;