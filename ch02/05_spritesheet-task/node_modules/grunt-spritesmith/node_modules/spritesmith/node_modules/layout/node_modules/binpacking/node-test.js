var binpacking = require('./js');
var Packer = binpacking.Packer;
var GrowingPacker = binpacking.GrowingPacker;


var examples = {

      simple: [
        { w: 500, h: 200, num:  1 },
        { w: 250, h: 200, num:  1 },
        { w: 50,  h: 50,  num: 20 }
      ],

      square: [
        { w: 50, h: 50, num: 100 }
      ],

      power2: [
        { w:   2, h:   2, num: 256 },
        { w:   4, h:   4, num: 128 },
        { w:   8, h:   8, num:  64 },
        { w:  16, h:  16, num:  32 },
        { w:  32, h:  32, num:  16 },
        { w:  64, h:  64, num:   8 },
        { w: 128, h: 128, num:   4 },
        { w: 256, h: 256, num:   2 }
      ],

      tall: [
        { w: 50,  h: 400, num:  2 },
        { w: 50,  h: 300, num:  5 },
        { w: 50,  h: 200, num: 10 },
        { w: 50,  h: 100, num: 20 },
        { w: 50,  h:  50, num: 40 }
      ],

      wide: [
        { w: 400, h:  50, num:  2 },
        { w: 300, h:  50, num:  5 },
        { w: 200, h:  50, num: 10 },
        { w: 100, h:  50, num: 20 },
        { w:  50, h:  50, num: 40 }
      ],

      tallwide: [ /* alternate tall then wide */
        { w: 400, h: 100 },
        { w: 100, h: 400 },
        { w: 400, h: 100 },
        { w: 100, h: 400 },
        { w: 400, h: 100 },
        { w: 100, h: 400 }
      ],

      oddeven: [ /* both odd and even sizes leaves little areas of whitespace */
        { w:  50, h:  50, num: 20 },
        { w:  47, h:  31, num: 20 },
        { w:  23, h:  17, num: 20 },
        { w: 109, h:  42, num: 20 },
        { w:  42, h: 109, num: 20 },
        { w:  17, h:  33, num: 20 },
      ],

      complex: [
        {w: 100, h: 100, num:   3},
        {w:  60, h:  60, num:   3},
        {w:  50, h:  20, num:  20},
        {w:  20, h:  50, num:  20},
        {w: 250, h: 250, num:   1},
        {w: 250, h: 100, num:   1},
        {w: 100, h: 250, num:   1},
        {w: 400, h:  80, num:   1},
        {w: 80,  h: 400, num:   1},
        {w:  10, h:  10, num: 100},
        {w:   5, h:   5, num: 500}
      ]
  };

function templateToBlocks(example) {
	var blocks = [];
	
	example.forEach(function (template) {
		var num = template.num ? template.num : 1;
		for (var i = 0; i < num ; i++) {
			blocks.push({w:template.w, h:template.h});
		}
	});

	return blocks;
}

var packer = new GrowingPacker;

function quality(blocks) {
	var fitCount = 0;
	var usedCount = 0;

	blocks.forEach(function (block) {
		if(undefined!==block.fit && undefined!==block.fit.x && undefined!==block.fit.y) {
			fitCount++;
		}
		if(undefined!==block.fit && block.fit.used) {
			usedCount++;
		}
	});

	return {
		length : blocks.length,
		used   : usedCount,
		fit    : fitCount,
		status : usedCount === blocks.length && fitCount === blocks.length ? 'ok' : 'fail'};
}

function run(example) {
	var blocks = templateToBlocks(example);
	packer.fit(blocks);
	console.log(quality(blocks));
}

run(examples.simple);
run(examples.square);
run(examples.power2);
run(examples.tall);
run(examples.wide);
run(examples.tallwide);
run(examples.oddeven);
run(examples.complex);
