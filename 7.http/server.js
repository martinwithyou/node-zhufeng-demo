/**
 * Created by Galen on 2016/3/22.
 */
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');


http.createServer(function (req, res) {
    var url = req.url;
    if(req.url == '/favicon.icon'){
        res.statusCode = 404;
        res.end('404');
        return;
    }else if(req.url == '/'){
        url = '/index.html'
    }
    res.setHeader('Content-Type', mime.lookup(url) + ';charset=utf-8');
    fs.readFile('.' + url, 'utf8', function (err, data) {
        res.write(data);
        res.end();
    })

}).listen('8080');