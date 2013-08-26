function jsonTemplate(params) {
  // Convert items from an array into an object
  var items = params.items,
      itemObj = {};
  items.forEach(function (item) {
    // Grab the name and store the item under it
    var name = item.name;
    itemObj[name] = item;

    // Delete the name from the item
    delete item.name;
  });

  // Stringify the itemObj
  var retStr = JSON.stringify(itemObj, null, 4);

  // Return the stringified JSON
  return retStr;
}

// Export our JSON template
module.exports = jsonTemplate;