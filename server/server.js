var http = require('http');

var server = new http.Server();

server.listen(1337, '127.0.0.1');

var counter = 0;

server.on('request', function (req, res) {
    res.writeHead (200, {'Content-Type': 'text/html; charset=UTF-8'})
    res.end('Hello world ' + ++counter);
});
