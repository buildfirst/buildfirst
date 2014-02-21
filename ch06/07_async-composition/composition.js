var tasks = factory(5);
var async = require('async');

async.parallel([
  // this series is run in parallel with tasks[3]
  async.apply(async.series, [
    // tasks[2] runs only after the waterfall below is complete
    async.apply(async.waterfall, [
      // these two run in waterfall
      tasks[0],
      tasks[1]
    ]),
    tasks[2]
  ]),
  tasks[3]
], tasks[4]); // when everything else is done, run tasks[4]

function factory (n) {
  var list = [];
  for (var i = 0; i < n; i++) {
    list.push(createTask(i));
  }
  return list;
}

function createTask (i) {

  var delay = Math.random() * 5000;

  return function () {
    var done = Array.prototype.slice.call(arguments).pop();

    setTimeout(function () {

      console.log(i);

      if (typeof done === 'function') {
        done();
      }

    }, delay);
  };

}
