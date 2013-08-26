# gmsmith [![Donate on Gittip](http://badgr.co/gittip/twolfson.png)](https://www.gittip.com/twolfson/)

[GM][gm] engine for [spritesmith][spritesmith].

[gm]: http://aheckmann.github.io/gm/
[spritesmith]: https://github.com/Ensighten/spritesmith

## Requirements
`gmsmith` depends on [gm](https://github.com/aheckmann/gm) which depends on [Graphics Magick](http://www.graphicsmagick.org/).

I have found it is best to install from the site rather than through a package manager (e.g. `apt-get`) to get the latest as well as without transparency issues.

This module has been developed and tested against `1.3.17`.

## Getting Started
Install the module with: `npm install gmsmith`

```javascript
// Convert images into gmsmith objects
var images = ['img1.jpg', 'img2.png'];
gmsmith.createImages(this.images, function handleImages (err, imgs) {
  // Create a canvas to draw onto (200 pixels wide, 300 pixels tall)
  gmsmith.createCanvas(200, 200, function (err, canvas) {
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
