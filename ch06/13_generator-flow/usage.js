var flow = require('./flow.js');

function get (next) {
  setTimeout(function () {
    next(null, ['bacon', 'lettuce', 'crispy bacon']);
  }, 1000);
}

flow(function* (next) {
  console.log('fetching food types...');
  var types = yield get;
  console.log('waiting around...');
  yield setTimeout(next, 2000);
  console.log(types.join(', '));
});
