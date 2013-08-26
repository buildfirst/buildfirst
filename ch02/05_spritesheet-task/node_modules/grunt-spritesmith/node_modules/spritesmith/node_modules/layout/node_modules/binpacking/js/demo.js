/******************************************************************************

 This is a demo page to experiment with binary tree based
 algorithms for packing blocks into a single 2 dimensional bin.

 See individual .js files for descriptions of each algorithm:

  * packer.js         - simple algorithm for a fixed width/height bin
  * packer.growing.js - complex algorithm that grows automatically

 TODO
 ====
  * step by step animated render to watch packing in action (and help debug)
  * optimization - mark branches as "full" to avoid walking them
  * optimization - dont bother with nodes that are less than some threshold w/h (2? 5?)

*******************************************************************************/

Demo = {

  init: function() {

    Demo.el = {
      examples: $('#examples'),
      blocks:   $('#blocks'),
      canvas:   $('#canvas')[0],
      size:     $('#size'),
      sort:     $('#sort'),
      color:    $('#color'),
      ratio:    $('#ratio'),
      nofit:    $('#nofit')
    };

    if (!Demo.el.canvas.getContext) // no support for canvas
      return false;

    Demo.el.draw = Demo.el.canvas.getContext("2d");
    Demo.el.blocks.val(Demo.blocks.serialize(Demo.blocks.examples.current()));
    Demo.el.blocks.change(Demo.run);
    Demo.el.size.change(Demo.run);
    Demo.el.sort.change(Demo.run);
    Demo.el.color.change(Demo.run);
    Demo.el.examples.change(Demo.blocks.examples.change);
    Demo.run();

    Demo.el.blocks.keypress(function(ev) {
      if (ev.which == 13)
        Demo.run(); // run on <enter> while entering block information
    });
  },

  //---------------------------------------------------------------------------

  run: function() {

    var blocks = Demo.blocks.deserialize(Demo.el.blocks.val());
    var packer = Demo.packer();

    Demo.sort.now(blocks);

    packer.fit(blocks);

    Demo.canvas.reset(packer.root.w, packer.root.h);
    Demo.canvas.blocks(blocks);
    Demo.canvas.boundary(packer.root);
    Demo.report(blocks, packer.root.w, packer.root.h);
  },

  //---------------------------------------------------------------------------

  packer: function() {
    var size = Demo.el.size.val();
    if (size == 'automatic') {
      return new GrowingPacker();
    }
    else {
      var dims = size.split("x");
      return new Packer(parseInt(dims[0]), parseInt(dims[1]));
    }
  },

  //---------------------------------------------------------------------------

  report: function(blocks, w, h) {
    var fit = 0, nofit = [], block, n, len = blocks.length;
    for (n = 0 ; n < len ; n++) {
      block = blocks[n];
      if (block.fit)
        fit = fit + block.area;
      else
        nofit.push("" + block.w + "x" + block.h);
    }
    Demo.el.ratio.text(Math.round(100 * fit / (w * h)));
    Demo.el.nofit.html("Did not fit (" + nofit.length + ") :<br>" + nofit.join(", ")).toggle(nofit.length > 0);
  },

  //---------------------------------------------------------------------------

  sort: {

    random  : function (a,b) { return Math.random() - 0.5; },
    w       : function (a,b) { return b.w - a.w; },
    h       : function (a,b) { return b.h - a.h; },
    a       : function (a,b) { return b.area - a.area; },
    max     : function (a,b) { return Math.max(b.w, b.h) - Math.max(a.w, a.h); },
    min     : function (a,b) { return Math.min(b.w, b.h) - Math.min(a.w, a.h); },

    height  : function (a,b) { return Demo.sort.msort(a, b, ['h', 'w']);               },
    width   : function (a,b) { return Demo.sort.msort(a, b, ['w', 'h']);               },
    area    : function (a,b) { return Demo.sort.msort(a, b, ['a', 'h', 'w']);          },
    maxside : function (a,b) { return Demo.sort.msort(a, b, ['max', 'min', 'h', 'w']); },

    msort: function(a, b, criteria) { /* sort by multiple criteria */
      var diff, n;
      for (n = 0 ; n < criteria.length ; n++) {
        diff = Demo.sort[criteria[n]](a,b);
        if (diff != 0)
          return diff;  
      }
      return 0;
    },

    now: function(blocks) {
      var sort = Demo.el.sort.val();
      if (sort != 'none')
        blocks.sort(Demo.sort[sort]);
    }
  },

  //---------------------------------------------------------------------------

  canvas: {

    reset: function(width, height) {
      Demo.el.canvas.width  = width  + 1; // add 1 because we draw boundaries offset by 0.5 in order to pixel align and get crisp boundaries
      Demo.el.canvas.height = height + 1; // (ditto)
      Demo.el.draw.clearRect(0, 0, Demo.el.canvas.width, Demo.el.canvas.height);
    },

    rect:  function(x, y, w, h, color) {
      Demo.el.draw.fillStyle = color;
      Demo.el.draw.fillRect(x + 0.5, y + 0.5, w, h);
    },

    stroke: function(x, y, w, h) {
      Demo.el.draw.strokeRect(x + 0.5, y + 0.5, w, h);
    },

    blocks: function(blocks) {
      var n, block;
      for (n = 0 ; n < blocks.length ; n++) {
        block = blocks[n];
        if (block.fit)
          Demo.canvas.rect(block.fit.x, block.fit.y, block.w, block.h, Demo.color(n));
      }
    },
    
    boundary: function(node) {
      if (node) {
        Demo.canvas.stroke(node.x, node.y, node.w, node.h);
        Demo.canvas.boundary(node.down);
        Demo.canvas.boundary(node.right);
      }
    }
  },

  //---------------------------------------------------------------------------

  blocks: {

    examples: {

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
      ],

      current: function() {
        return Demo.blocks.examples[Demo.el.examples.val()];
      },

      change: function() {
        Demo.el.blocks.val(Demo.blocks.serialize(Demo.blocks.examples.current()));
        Demo.run();
      }
    },

    deserialize: function(val) {
      var i, j, block, blocks = val.split("\n"), result = [];
      for(i = 0 ; i < blocks.length ; i++) {
        block = blocks[i].split("x");
        if (block.length >= 2)
          result.push({w: parseInt(block[0]), h: parseInt(block[1]), num: (block.length == 2 ? 1 : parseInt(block[2])) });
      }
      var expanded = [];
      for(i = 0 ; i < result.length ; i++) {
        for(j = 0 ; j < result[i].num ; j++)
          expanded.push({w: result[i].w, h: result[i].h, area: result[i].w * result[i].h});
      }
      return expanded;
    },

    serialize: function(blocks) {
      var i, block, str = "";
      for(i = 0; i < blocks.length ; i++) {
        block = blocks[i];
        str = str + block.w + "x" + block.h + (block.num > 1 ? "x" + block.num : "") + "\n";
      }
      return str;
    }

  },

  //---------------------------------------------------------------------------

  colors: {
    pastel:         [ "#FFF7A5", "#FFA5E0", "#A5B3FF", "#BFFFA5", "#FFCBA5" ],
    basic:          [ "silver", "gray", "red", "maroon", "yellow", "olive", "lime", "green", "aqua", "teal", "blue", "navy", "fuchsia", "purple" ],
    gray:           [ "#111", "#222", "#333", "#444", "#555", "#666", "#777", "#888", "#999", "#AAA", "#BBB", "#CCC", "#DDD", "#EEE" ],
    vintage:        [ "#EFD279", "#95CBE9", "#024769", "#AFD775", "#2C5700", "#DE9D7F", "#7F9DDE", "#00572C", "#75D7AF", "#694702", "#E9CB95", "#79D2EF" ],
    solarized:      [ "#b58900", "#cb4b16", "#dc322f", "#d33682", "#6c71c4", "#268bd2", "#2aa198", "#859900" ],
    none:           [ "transparent" ]
  },

  color: function(n) {
    var cols = Demo.colors[Demo.el.color.val()];
    return cols[n % cols.length];
  }

  //---------------------------------------------------------------------------

}

$(Demo.init);

