var request = require('request');

module.exports = function (done) {
  var opts = {
    url: 'https://api.github.com/zen',
    headers: {
      'User-Agent': 'https://github.com/bevacqua/buildfirst'
    },
    crossOrigin: true
  };

  request(opts, cb);

  function cb (err, res, body) {
    done(null, body);
  }
}
