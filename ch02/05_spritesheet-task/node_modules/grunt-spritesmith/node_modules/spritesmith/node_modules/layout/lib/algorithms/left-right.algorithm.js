// Add in left-right algorithm
function leftRightAlgorithm(items) {
  // Sort the items by their width
  items.sort(function (a, b) {
    return a.width - b.width;
  });

  // Iterate over each of the items
  var x = 0;
  items.forEach(function (item) {
    // Update the x to the current width
    item.x = x;
    item.y = 0;

    // Increment the x by the item's width
    x += item.width;
  });

  // Return the items
  return items;
}

// Export our algorithm
module.exports = leftRightAlgorithm;