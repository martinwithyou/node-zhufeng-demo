/**
 * Created by Galen on 2016/3/13.
 */
var express = require('express');
var app = express();



app.get('/hello', function(req, res){
    console.log(req.host);
    console.log(req.path);
    console.log(req.query);
    res.send('welcome!')
});


app.get('/user/:id/:age', function(req, res){
    console.log(req.params.id);
    console.log(req.params.age);
    console.log(req.path);
    res.send('welcome!')
});


app.listen(3000);