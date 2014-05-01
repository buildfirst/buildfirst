var express = require('express');
var rendr = require('rendr');
var app = express();
var port = process.env.PORT || 3000;

var rendrServer = rendr.createServer({
  dataAdapterConfig: {
    default: {
      host: 'localhost:3000/api',
      protocol: 'http'
    }
  }
});

app.use(express.compress());
app.use(express.static(__dirname + '/public'));
app.use(express.logger());
app.use(express.bodyParser());

require('./api')(app);

app.use(rendrServer);
app.listen(port);

console.log('listening on port %s', port, app.get('env'));
