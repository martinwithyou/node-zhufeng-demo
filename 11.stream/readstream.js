/**
 * Created by Galen on 2016/3/13.
 */

var fs = require('fs');
var rs = fs.createReadStream('./data.txt', {
    start: 1,
    end: 8,
    highWaterMark: 3,
});
rs.setEncoding('utf8');
rs.on('data', function(data) {
    rs.pause();
    setTimeout(function() {
        console.log('得到数据'+ data);
        rs.resume();
    },1000);

});
rs.on('end', function() {
    console.log('end');
});
rs.on('error', function(err) {
    console.log(err.toString())
});