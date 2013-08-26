// Load in local modules
var fs = require('fs'),
    _ = require('underscore'),
    mustache = require('mustache'),
    tmpl = fs.readFileSync(__dirname + '/css.template.mustache', 'utf8');

// Define our css template fn ({items, options}) -> css
function cssTemplate(params) {
  // Localize parameters
  var items = params.items,
      options = params.options;

  // Fallback class naming function
  var classFn = options.cssClass || function defaultCssClass (item) {
        return '.icon-' + item.name;
      };

  // Add class to each of the options
  items.forEach(function saveClass (item) {
    item['class'] = classFn(item);
  });

  // Render and return CSS
  var css = mustache.render(tmpl, params);
  return css;
}

// Export our CSS template
module.exports = cssTemplate;