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
    console.log('express listening on http://localhost:3000/');
});