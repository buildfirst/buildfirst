# json2css [![Donate on Gittip](http://badgr.co/gittip/twolfson.png)](https://www.gittip.com/twolfson/)

Convert JSON into pre-processor ready CSS.

This is initially designed for generating coordinates for a mapping of sprites on a spritesheet. However, it should be usable for anything related to dimensions/positions and CSS.

## Getting Started
Install the module with: `npm install json2css`

```javascript
// Compilation
var json2css = require('json2css'),
    obj = [
      {'name': 'github', 'x': 0, 'y': 0, 'width': 10, 'height': 20, 'total_width': 80, 'total_height': 100, 'image': 'spritesheet.png'},
      {'name': 'twitter', 'x': 10, 'y': 20, 'width': 20, 'height': 30, 'total_width': 80, 'total_height': 100, 'image': 'spritesheet.png'},
      {'name': 'rss', 'x': 30, 'y': 50, 'width': 50, 'height': 50, 'image': 'spritesheet.png'}
    ],
    stylus = json2css(obj, {'format': 'stylus'});

// Result (stylus)
$github_x = 0px;
$github_y = 0px;
...
$github = 0px 0px 0px 0px 10px 20px 80px 100px 'spritesheet.png';
...
$twitter = 10px 20px -10px -20px 20px 30px 80px 100px 'spritesheet.png';
...
$rss = 30px 50px -30px -50px 50px 50px 80px 100px 'spritesheet.png';
...
spriteWidth($sprite) {
  width: $sprite[0];
}
...
sprite($sprite) {
  spriteImage($sprite)
  spritePosition($sprite)
  spriteWidth($sprite)
  spriteHeight($sprite)
}

// Inside of your Stylus
.githubLogo {
  sprite($github);
}
```

## Documentation
json2css is a single function repo
```js
/**
 * @param {Object|Object[]} input Object to convert into CSS
 * @param {String} input.name Name to use for the image
 *                 If input is an object, the key will be the name by default
 * @param {Number} input.x Horizontal coordinate of top-left corner of image
 * @param {Number} input.y Vertical coordinate of top-left corner of image
 * @param {Number} input.width Horizontal length of image
 * @param {Number} input.height Vertical length of image
 * @param {Number} input.total_width Horizontal length of spritesheet
 * @param {Number} input.total_height Vertical length of spritesheet
 * @param {Number} input.image Path to image itself (used as a URL component)
 * @param {Object} [options] Options to convert JSON with
 * @param {String} [options.format=css] Format to output json in
 *                                       Available: json, css, less, sass, scss, stylus
 * @param {Mixed} [options.formatOpts={}] Options to pass through to the formatter
 */
```

New templates can be added dynamically via
```js
// Processes template via function
json2css.addTemplate(name, fn);

// Processes template via mustache
json2css.addMustacheTemplate(name, tmplStr);
```

## Examples
Using `json2css` with an object

```js
var obj = {
      'github': {'x': 0, 'y': 0, 'width': 10, 'height': 20, 'total_width': 80, 'total_height': 100, 'image': 'spritesheet.png'},
      'twitter': {'x': 10, 'y': 20, 'width': 20, 'height': 30, 'total_width': 80, 'total_height': 100, 'image': 'spritesheet.png'},
      'rss': {'x': 30, 'y': 50, 'width': 50, 'height': 50, 'total_width': 80, 'total_height': 100, 'image': 'spritesheet.png'}
    },
    stylus = json2css(obj, {'format': 'stylus'});

// Result (stylus)
$github_x = 0px;
$github_y = 0px;
...
$github = 0px 0px 0px 0px 10px 20px 80px 100px 'spritesheet.png';
...
$twitter = 10px 20px -10px -20px 20px 30px 80px 100px 'spritesheet.png';
...
$rss = 30px 50px -30px -50px 50px 50px 80px 100px 'spritesheet.png';
...
spriteWidth($sprite) {
  width: $sprite[0];
}
...
sprite($sprite) {
  spriteImage($sprite)
  spritePosition($sprite)
  spriteWidth($sprite)
  spriteHeight($sprite)
}

// Inside of your Stylus
.githubLogo {
  sprite($github);
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via [grunt](https://github.com/cowboy/grunt) and test via `npm test`.

## License
Copyright (c) 2012 Todd Wolfson

Licensed under the MIT license.
