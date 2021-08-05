var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/demo');
var conn = mongoose.connection;
var path = require('path');
var Grid = require('gridfs-stream');
var fs = require('fs');

Grid.mongo = mongoose.mongo;

fs.readdir(path.join(__dirname, './imgs/img/'), (err, files)=>{
    files.forEach(file=>{
        //console.log(file);
        var filePath = path.join(__dirname+'/imgs/img/'+file);
        conn.once('open', function(){
            var gfs = Grid(conn.db);
            var writestream = gfs.createWriteStream({
                filename: file
            });
            fs.createReadStream(filePath).pipe(writestream);
            writestream.on('close', function(file){
                console.log('Written to DB');
            });
        });
    });
});