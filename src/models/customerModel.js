const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    firstName : {type:String,required:true},
    lastName : {type:String,required:true},
    moblieNumber : {type:String,required:true},
    DOB : {type:Date,required:true},
    emailId : {type:String,required:true},
    address : {type:String,required:true},
    customerId : {type:String,required:true},
    status : {type:String,required:true,enum:["active","inactive"]}
},
{timestamps : true});

module.exports = mongoose.model('Customer', CustomerSchema)