var emitter = require('./emitter.js');
var beats = emitter();

beats.on('ripple', function (i) {
  if (i > 0) {
    setTimeout(beats.emit.bind(beats, 'ripple', --i), Math.random() * 150 + 50);
  } else {
    beats.emit('calm');
  }
});

beats.on('calm', setTimeout.bind(null, beats.emit.bind(beats, 'ripple', 10), 1000));

beats.on('calm', console.log.bind(console, 'Calm...'));
beats.on('ripple', console.log.bind(console, 'Rippley!'));

beats.emit('ripple', 15);
