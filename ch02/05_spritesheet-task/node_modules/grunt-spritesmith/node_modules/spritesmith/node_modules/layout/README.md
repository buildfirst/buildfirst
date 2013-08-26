# layout [![Donate on Gittip](http://badgr.co/gittip/twolfson.png)](https://www.gittip.com/twolfson/)

Organize and layout items based on various algorithms

## Getting Started
Install the module with: `npm install layout`

```javascript
// Load in layout
var layout = require('layout');

// Generate a new layer to organize items on
var layer = layout('top-down');

// Add items that you want to organize
layer.addItem({'height': 20, 'width': 10, 'meta': 'medium'});
layer.addItem({'height': 10, 'width': 10, 'meta': 'small'});
layer.addItem({'height': 50, 'width': 40, 'meta': 'large'});

// Export the info
var info = layer['export']();

// We get back the width and height of the pack as well as organized items
{
    height: 80,
    width: 40,
    items: [{
        height: 10,
        width: 10,
        meta: 'small',
        x: 0,
        y: 0
    }, {
        height: 20,
        width: 10,
        meta: 'medium',
        x: 0,
        y: 10
    }, {
        height: 50,
        width: 40,
        meta: 'large',
        x: 0,
        y: 30
    }]
}
```

## Documentation
Layout is a constructor function
```js
/**
 * Layout adds items in an algorithmic fashion
 * @constructor
 * @param {String|Function} [algorithm="top-down"] Name of algorithm or custom algorithm to use
 * Algorithms available: top-down, left-right, diagonal, alt-diagonal, binary-tree
 */
```

Items can be added via `addItem` which are required to have a `height` and `width`. Any additional info should be stored inside of `meta`.
```js
/**
 * @param {Object} item Item to store -- this currently is mutated in-memory
 * @param {Number} item.width Width of the item
 * @param {Number} item.height Height of the item
 * @param {Mixed} [item.meta] Any meta data you would like to store related to the item
 */
```

`export` is how you take your items and organize them.
```js
/**
 * @returns {Object} retObj
 * @returns {Number} retObj.height Height of the processed layout
 * @returns {Number} retObj.width Width of the processed layout
 * @returns {Mixed[]} retObj.items Organized items
 */
```

### Custom algorithms
You can add your own algorithm via `layout.addAlgorithm`
```js
/**
 * Method to add new algorithms via
 * @param {String} name Name of algorithm
 * @param {Function} algorithm Algorithm to bind under name
 */
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## License
Copyright (c) 2012 Todd Wolfson
Licensed under the MIT license.
