# phantomjssmith [![Donate on Gittip](http://badgr.co/gittip/twolfson.png)](https://www.gittip.com/twolfson/)

[PhantomJS][phantomjs] engine for [spritesmith][spritesmith].

[phantomjs]: http://phantomjs.org/
[spritesmith]: https://github.com/Ensighten/spritesmith

## Requirements
This depends on having `phantomjs` installed on your machine. For installation instructions, visit [the website][phantomjs]. This module has been tested against `1.9.0`.

## Getting Started
Install the module with: `npm install phantomjssmith`

```javascript
// Convert images into phantomjssmith objects
var images = ['img1.jpg', 'img2.png'];
phantomjssmith.createImages(this.images, function handleImages (err, imgs) {
  // Create a canvas to draw onto (200 pixels wide, 300 pixels tall)
  phantomjssmith.createCanvas(200, 200, function (err, canvas) {
    // Add each image at a specific location (upper left corner = {x, y})
    var coordinatesArr = [{x: 0, y: 0}, {x: 50, y: 50}];
    imgs.forEach(function (img, i) {
      var coordinates = coordinatesArr[i];
      canvas.addImage(img, coordinates.x, coordinates.y);
    }, canvas);

    // Export canvas to image
    canvas['export']({format: 'png'}, function (err, result) {
      result; // Binary string representing a PNG image of the canvas
    });
  });
});
```

## Documentation
This module was built to the specification for all spritesmith modules.

https://github.com/twolfson/spritesmith-engine-test

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint using [grunt](https://github.com/gruntjs/grunt) and test via `npm test`.

## License
Copyright (c) 2013 Todd Wolfson

Licensed under the MIT license.