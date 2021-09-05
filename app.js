const express = require('express');
const app =express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const {PythonShell}=require('python-shell')
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost:27017/demo');
// var conn = mongoose.connection;
var path = require('path');
var Grid = require('gridfs-stream');
var fs = require('fs');
const { response } = require('express');

Grid.mongo = mongoose.mongo;

const cors_option={
    origin:'http://localhost:80',
    credentials:true
}

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors(cors_option));
app.use(bodyParser.json());

var query;

// Reactjs로부터 Query 문장 받기
app.post('/api/:query', (req,res)=>{
    query = req.params.query;
    
    const options={
        scriptPath:'./public',
        args:query
    }
    console.log(query);
    // python으로 문장 유사도 구하기
    PythonShell.run("textSimilarity.py", options, function(err, data){
        if (err) throw err
        var result=JSON.parse(data)

        res.send({
            data:result
        })
    })
});

// Reactjs로 Image 전달 (All)
// app.get('/api/images/all',(req,res)=>{
//     const gfs = new Grid(conn.db);
//     var Data={
//         images:[]
//     }
//     // 모든 데이터 가져오는 비동기 함수
//     gfs.files.find({}).toArray((err,files)=>{
//         if(err){
//             res.status(500).json({
//                 error:{
//                     message:"Server error"
//                 }
//             })
//         }
//         for (var i=0;i<files.length;i++){
//             var fn=files[i].filename
//             var readstream=gfs.createReadStream(files[i].filename)
//             var chunks=[]
//             var image={
//                 filename:"",
//                 data:""
//             }
//             readstream.on('data',function(chunk){
//                 chunks.push(chunk)
//             })
//             readstream.on('end',function(){
//                 var data=new Buffer.concat(chunks)
//                 var img="data:image/jpeg;base64,"+Buffer(data).toString('base64')
//                 chunks=[]
//                 image={
//                     filename:fn,
//                     data:img
//                 }
//                 // console.log(`END : ${files[i].filename}`)

//             })
//             readstream.on('error',function(){
//                 console.log('Error Occurred')

//             })
//             // image={
//             //     filename:files[i].filename,
//             //     data:img.toString('base64')
//             // }
//             Data.images.push(image)
//             //readstream.pipe(res)
//         }
//         res.send(Data)
        
//     })
//     // .forEach((d)=>{
//     //     chunks=[]
//     //     var rs=gfs.createReadStream(d.filename)
//     //     rs.on('data',(chunk)=>{
//     //         console.log(`data called : ${d.filename}`)
//     //         chunks.push(chunk)
//     //     })
//     //     rs.on('end',()=>{
//     //         console.log(`end called : ${d.filename}`)
//     //     })
//     //     rs.on('error',function(){
//     //         console.log('Error Occurred')
//     //         res.status(404).json({
//     //             error:{
//     //                 message:"File not found"
//     //             }
//     //         })
//     //     })
//     // })
// })

// // Reactjs로 filename에 해당하는 Image 전달 (1개)
// app.get('/api/images/:filename',(req,res)=>{
//     const gfs = new Grid(conn.db);

//     var fn=req.params.filename+'.jpg';
//     console.log(fn);
//     gfs.files.findOne({
//         filename: fn.toString()
//     },function(err, file){
//         if(err){
//             res.status(404).send({
//                 error:{
//                     message:'File not found'
//                 }
//             })
//         }
//         else{
//             try{
//                 if(file==undefined) throw err
//                 var data=[]
//                 var readstream=gfs.createReadStream(file.filename)
//                 readstream.on('data',function(chunk){
//                     data.push(chunk)
//                 })
//                 readstream.on('end',function(){
//                     data=Buffer.concat(data)
//                     var img="data:image/jpeg;base64,"+Buffer(data).toString('base64')
//                     res.status(200).json({image:{
//                         filename:fn.toString(),
//                         data:img
//                     }})
//                 })
//                 readstream.on('error',function(){
//                     console.log('Error Occurred')
//                     res.status(404).json({
//                         error:{
//                             message:"File not found"
//                         }
//                     })
//                 })
//             }
//             catch(TypeError){
//                 res.status(404).json({
//                     error:{
//                         message:"File not found"
//                     }
//                 })
//             }
//         }
//     })})
//     .on('error', err=>console.log(err));

app.listen(port, ()=>{
    console.log('listening at localhost:', {port});
});
