const cardModel = require("../models/cardModel.js")

// const {validBody,validName,validAuthorTitle,validMail,validPassword} = require("../validator/validations")

createCard = async function(req,res){
    try{
        let data = req.body
        // ---------------- validations ---------------
        // if(!validBody(data)) return res.status(400).send({status:false,message:"Request body is empty"})
        // const {fname,lname,title,email,password} = data
        // if(!validName(fname)) return res.status(400).send({status:false,message:"Please provide first name with valid format"})
        // if(!validName(lname)) return res.status(400).send({status:false,message:"Please provide last name with valid format"})
        // if(!validAuthorTitle(title)) return res.status(400).send({status:false,message:"Please provide a valid title i.e. Mr,Miss,Mrs"})
        // if(!validMail(email)) return res.status(400).send({status:false,message:"Please provide email with valid format"})
        // let emailExist = await authorModel.findOne({email:email})
        // if(emailExist) return res.status(400).send({status:false,message:"This email is already exist"})
        // if(!validPassword(password)) return res.status(400).send({status:false,message:"Please provide password with valid format"})
        // ---------------------------------------------
        let cardData = await cardModel.create(req.body)
        res.status(201).send({status:true,data:cardData})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}

const getCards = async function(req,res){
    try{
        let data = req.body
        // ---------------- validations ---------------
        // if(!validBody(data)) return res.status(400).send({status:false,message:"Please provide password and email"})
        // const {email,password} = data
        // if(!validMail(email)) return res.status(400).send({status:false,message:"Please provide email with valid format"})
        // if(!validPassword(password)) return res.status(400).send({status:false,message:"Please provide password with valid format"})
        // let user = await authorModel.findOne({email:email,password:password})
        // if(!user) return res.status(404).send({status:false,message:"Invalid mail or password"})
        // ---------------------------------------------
        let cardData = await cardModel.find()
        res.status(200).send({status: true,data:cardData})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}


module.exports = {createCard, getCards}
