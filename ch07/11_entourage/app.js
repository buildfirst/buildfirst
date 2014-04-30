var express = require('express');
var rendr = require('rendr');
var app = express();
var port = process.env.PORT || 3000;

var dataAdapterConfig = {
  'default': {
    host: 'api.github.com',
    protocol: 'https'
  },
  'travis-ci': {
    host: 'api.travis-ci.org',
    protocol: 'https'
  }
};

var rendrServer = rendr.createServer({
  dataAdapterConfig: dataAdapterConfig
});

app.use(express.compress());
app.use(express.static(__dirname + '/public'));
app.use(express.logger());
app.use(express.bodyParser());
app.use(rendrServer);
app.listen(port);

console.log('listening on port %s', port, app.get('env'));
