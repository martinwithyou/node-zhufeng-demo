/**
 * Created by Galen on 2016/3/13.
 */
var fs = require('fs');
var rs = fs.createReadStream('./data.txt');
rs.setEncoding('utf8');
var ws = fs.createWriteStream(
    './write.txt',
    {
        flag: "a",
    }
);
function copy(){
    rs.on('data',function(data){
        ws.write(data, 'utf8', function(){
        })

    })
    rs.on('end',function(){
        ws.end()
    })
}
copy();