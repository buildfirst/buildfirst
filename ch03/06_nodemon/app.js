'use strict';

var path = require('path');
var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req, res){
    var url = req.url === '/' ? '/views/home.html' : req.url;
    var filename = path.join(process.cwd(), 'build' + url);

    fs.readFile(filename, { encoding: 'utf8' }, function (err, html) {
        res.writeHead(200);
        res.end(html);
    });
});

app.listen(3000, function () {
    console.log('app listening on http://localhost:3000/');
});

// change something while `nodemon app.js` is running
// and it will automatically reload the app for you.
