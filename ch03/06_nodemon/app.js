'use strict';

var http = require('http');

var app = http.createServer(function(req, res){
    res.send('Hello nodemon!', 200);
    res.end();
});

app.listen(3000, function () {
    console.log('express listening on port', 3000);
});

// change something while `nodemon app.js` is running
// and it will automatically reload the app for you.