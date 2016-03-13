/**
 * Created by Galen on 2016/3/13.
 */
var http = require('http');
http.createServer(function(req,res){
    req.on('data', function(data){
        console.log(data)
    })
    req.on('end', function(){

    })
}).listen('8080');