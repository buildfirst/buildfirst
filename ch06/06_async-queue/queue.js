var async = require('async');
var q = async.queue(worker, 1);

function worker (id, done) {
  setTimeout(function () {
    console.log('Did something with id', id);
    done();
  }, 500);
}

q.push([13,12,5,135]);
