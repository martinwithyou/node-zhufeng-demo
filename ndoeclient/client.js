/**
 * Created by Galen on 2016/3/13.
 */
var http = require('http');
http.request({
    host:'localhost',
    port:8080,
    path:'/post',
    method:'POST',
}, function(res){
    res.on('data', function(data){
        console.log(data)
    });
    res.on('end', function(){
        console.log('end');
    })

});