var http = require('http');
var fs = require('fs');
var mime = require('mime');
var url = require('url');

http.createServer(function(request, response) {
    var urlquery = url.parse(request.url, true).pathname;
    console.log(urlquery);
    response.setHeader('content-Type', 'text/html;charset=utf-8');
    if(urlquery == '/'){
        fs.readFile('./index.html', function(err, data) {
            if(err){
                console.log(err)
            }else{
                response.end(data)
            }
        });
    }else if(urlquery == '/clock'){
        response.end(new Date().toString())
    }

}).listen('8080', 'localhost');
