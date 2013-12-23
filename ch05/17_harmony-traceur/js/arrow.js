'use strict';

function shoot (something, done) {
  done('shooting ' + something);
}

shoot('arrow', (message) => console.log(message));
// <- shooting arrow
