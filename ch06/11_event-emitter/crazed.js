var emitter = require('./emitter.js');
var delays = [50, 100, 150, 500, 800, 150, 125, 65, 300, 1500];
var names = ['doge', 'derp', 'much', 'very', 'someone', 'she is', 'he is', 'they are', 'something', 'cat', 'nyan'];
var beaters = [];
var c = {};

function inc (w) {
  c[w] = (c[w] || 0) + 1;
}

function g (w) {
  return c[w] || 0;
}

function rnd (thing) {
  return thing[Math.floor(Math.random() * thing.length)];
}

function addBeater (s) {
  var beats = emitter({ n: rnd(names) });

  beats.on('ripple', function (i) {
    if (beats.dead) {
      return;
    }
    if (i > 0) {
      setTimeout(beats.emit.bind(beats, 'ripple', --i), rnd(delays));
    } else {
      beats.emit('calm');
    }
  });

  beats.on('calm', setTimeout.bind(null, beats.emit.bind(beats, 'ripple', 10), 1000));

  beats.on('calm', console.log.bind(console, beats.n, 'calming down...'));
  beats.on('ripple', console.log.bind(console, beats.n, 'rippling!'));
  beats.on('ripple', inc.bind(null, 'ripples'));

  beats.on('calm', function () {
    var other;
    var n = Math.random();
    if (n < Math.max(0.04, 0.2 / beaters.length)) {
      console.log('%s GIVING BIRTH!', beats.n);
      addBeater(Math.floor(Math.random() * 10 + 10));
    } else if (beaters.length > 2 && n < 0.2) {
      other = rnd(beaters);
      if (other !== beats) {
        console.log('%s killing %s!', beats.n, other.n);
        inc('kills');
        other.emit('die');
      }
    } else if (beaters.length > 3 && n < 0.4) {
      console.log('%s commiting suicide!', beats.n);
      inc('suicides');
      beats.emit('die');
    } else if (n < 0.6) {
      other = rnd(beaters);
      if (other !== beats) {
        console.log('%s pumping %s!', beats.n, other.n);
        inc('pumps');
        other.emit('ripple', 2);
      }
    }
  });

  beats.on('die', function () {
    beats.dead = true;
    beaters.splice(beaters.indexOf(beats), 1);
  });

  beats.emit('ripple', s);
  beaters.push(beats);
  inc('births');
}

addBeater(3);

setInterval(function () {
  console.log('BEATERS %s RIPPLES %s PUMPS %s BIRTHS %s KILLS %s SUICIDES %s', beaters.length, g('ripples'), g('pumps'), g('births'), g('kills'), g('suicides'));
}, 1000);
