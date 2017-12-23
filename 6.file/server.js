var http = require('http');
var fs = require('fs');
var mime = require('mime');
var url = require('url');

http.createServer(function(req, res) {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('helloworld')

}).listen('8080', '127.0.0.1');
