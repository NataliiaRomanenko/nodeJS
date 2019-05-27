


//lesson 14 Node as server
//var server = new http.Server();
// var counter = 0;
//
// var emit = server.emit;
// server.emit = function (event /*, arg1, arg2....*/){
//     console.log(event);
//     emit.apply(server, arguments);
// };
//
// server.on('request', function (req, res) {
//     res.writeHead (200, {'Content-Type': 'text/html; charset=UTF-8'})
//     res.end('Hello world ' + ++counter);
// });


//lesson 15 Node as server with echo
// var server = new http.Server(function (req, res) {
//      console.log(req.method, req.url);
//
//      var urlParsed = url.parse(req.url, true);
//      console.log(urlParsed);
//      if (urlParsed.pathname == '/echo' && urlParsed.query.message){
//          res.end(urlParsed.query.message)
//      }else {
//          res.statusCode = 404;
//          res.end('Page is not founded')
//      }
//  })
// server.listen(1337, '127.0.0.1');
var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res){
    console.log ( req.method, req.url, req.headers );

    var urlParsed = url.parse(req.url, true);
    debugger;
    //console.log(urlParsed);

    if(req.method === 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message){
        res.setHeader('Cache-control', 'no-cache');
        //res.statusCode = 200; //Ok
        res.end(urlParsed.query.message);
    }else{
        res.statusCode = 404; // Not found
        res.end("Page not founded");
    }
});

server.listen(1337, '127.0.0.1');
