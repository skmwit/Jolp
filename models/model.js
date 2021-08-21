const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({
    id : {type:Number, required:true, unique: true},
    img : {data : Buffer, contentType:String },
    description : {type:String, required=true}
},
{
    timestamps : true
});

module.exports = mongoose.model('Demo', demoSchema);