/**
 * Created by Galen on 2016/3/13.
 */
var express = require('express');
var app = express();

app.use(function(req, res, next){
    res.time = new Date().getTime();
    next();
});
app.use(function(req, res, next){
    res.mny = res.mny - 10;
    setTimeout(function(){next();}, 1000)

});
app.use(function(req, res, next){
    res.mny = res.mny - 30;
    next();
});

app.get('/money', function(req,res){
    var time = new Date().getTime();
    res.send('' + (time - res.time));
});


app.listen(3000);