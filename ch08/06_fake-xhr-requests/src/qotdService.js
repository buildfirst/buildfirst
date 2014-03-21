var request = require('superagent');

module.exports = function (done) {
  request
    .get('https://api.github.com/zen')
    //.set('User-Agent', 'superagent')
    .end(cb);

  function cb (err, res) {
    done(null, res.text);
  }
}
