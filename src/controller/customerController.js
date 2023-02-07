const customerModel = require("../models/customerModel.js")

const {validBody,validName,validPhone,validDate,validMail,validStatus} = require("../validator/validators.js")

createCustomer = async function(req,res){
    try{
        let data = req.body
        // ---------------- validations ---------------
        if(!validBody(data)) return res.status(400).send({status:false,message:"Request body is empty"})
        const {firstName,lastName,mobileNumber,DOB,emailId,address,customerId,status} = data
        if(!validName(firstName)) return res.status(400).send({status:false,message:"Please provide first name with valid format"})
        if(!validName(lastName)) return res.status(400).send({status:false,message:"Please provide last name with valid format"})
        // if(!validPhone(mobileNumber)) return res.status(400).send({status:false,message:"Please provide a valid mobile number"})
        // let moblieExist = await customerModel.findOne({mobileNumber:mobileNumber})
        // if(mobileExist) return res.status(400).send({status:false,message:"This mobile number is already exist"})
        // if(!validDate(DOB)) return res.status(400).send({status:false,message:"Please provide DOB with valid format"})
        if(!validMail(emailId)) return res.status(400).send({status:false,message:"Please provide email with valid format"})
        // let emailExist = await customerModel.findOne({email:email})
        // if(emailExist) return res.status(400).send({status:false,message:"This email is already exist"})
        // if(!validAddress(DOB)) return res.status(400).send({status:false,message:"Please provide email with valid format"})
        // if(!validCustomerId(DOB)) return res.status(400).send({status:false,message:"Please provide email with valid format"})
        if(!validStatus(status)) return res.status(400).send({status:false,message:"Please provide status active or inactive only"})
        
        // ---------------------------------------------
        let customerData = await customerModel.create(req.body)
        res.status(201).send({status:true,data:customerData})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}

const getCustomers = async function(req,res){
    try{
        let customerData = await customerModel.find({status:"active"})
        res.status(200).send({status: true,data:customerData})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}

const deleteCustomer = async function(req,res){
    try{
        let data = req.body
        // ---------------- validations ---------------
        if(!validBody(data)) return res.status(400).send({status:false,message:"Please provide password and email"})
        const {customerId} = data
        // let customer = await customerModel.findOne({customerId:customerId})
        // if(!customer) return res.status(404).send({status:false,message:"Invalid customerId"})
        // ---------------------------------------------
        // let customerData = await customerModel.
        await customerModel.findByIdAndUpdate(customerId,{$set:{status:"inactive"}})
        res.status(200).send({status: true,message:"deleted"})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}

module.exports = {createCustomer, getCustomers, deleteCustomer}