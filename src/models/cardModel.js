const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const CardSchema = new mongoose.Schema({
    cardNumber : {type:String,required:true},
    cardType : {type:String,required:true,enum:["special","regular"]},
    customerName : {type:String,required:true},
    status : {type:String,required:true,default:"active",enum:["active","inactive"]},
    vision : {type:String,required:true},
    customerID : {type:ObjectId,required:true,ref:"Customer"},
},
{timestamps : true});

module.exports = mongoose.model('Card', CardSchema)