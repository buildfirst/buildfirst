var reqwest = require('reqwest');

module.exports = function (done) {
  reqwest({
    url: 'http://api.icndb.com/jokes/random',
    crossOrigin: true
  }, next);

  function next (res) {
    done(null, res.value.joke);
  }
}
