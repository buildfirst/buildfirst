var request = require('superagent');

module.exports = function (done) {
  request
    .get('https://api.github.com/zen')
    .end(cb);

  function cb (err, res) {
    done(null, res.text);
  }
}
