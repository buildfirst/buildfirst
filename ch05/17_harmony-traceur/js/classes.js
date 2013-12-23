// http://wiki.ecmascript.org/doku.php?id=harmony:classes
'use strict';

class Harmony {
  constructor () {
    this.id = 'es6';
  }

  say (message) {
    console.log(this.id + ': ' + message);
  }
}

var harm = new Harmony();

harm.say('coming your way!');
// <- 'es6: coming your way!'

console.log(harm.id);
// <- 'es6';
