var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/demo');
var conn = mongoose.connection;
var path = require('path');
var Grid = require('gridfs-stream');
var fs = require('fs');

Grid.mongo = mongoose.mongo;

var filePath = path.join(__dirname+'/imgs/img19.jpg');
conn.once('open', function(){
    var gfs = Grid(conn.db);

    var fs_write_stream = fs.createWriteStream(filePath);

    var readstream = gfs.createReadStream({
        filename: 'img19.jpg'
    });
    readstream.pipe(fs_write_stream);
    fs_write_stream.on('close', function(file){
        console.log('Retrieved from DB');
    });
});