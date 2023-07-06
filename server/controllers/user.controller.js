const userModel =  require('../models/user.model');
const {decryptObject} = require('../utils/decryptData');
const {encryptData} = require('../utils/encryptData');
const jwt = require('jsonwebtoken');

module.exports.verifyUser = async (req,res)=>{

    //getting AES encrypted data from user and decrypting it
    const {name,password} = decryptObject(req.body.userData);

    //let's hash the decrypted name and password
    const hPassword = encryptData(password);

    //find user and compare hashes
    const user = await userModel.findOne({name:name, password:hPassword})


    if(user !=null ){
        const token = jwt.sign({
            name:user.name,
            email:user.email
        },process.env.JWT_SECRET_KEY)

        res.json({
            "status":"ok",
            "message":"Login success!",
            "token":token
        })
    }else{
        res.json({
            "status":"error",
            "error":"username/password is wrong"
        })
    }
}

module.exports.registerUser = async (req,res)=>{
    const {name,email,password} = decryptObject(req.body.userData);
    const user = await userModel.findOne({name:name})

    if(user !=null ){
        res.json({
            "status":"error",
            "error": "user already exists!"
        });
    }else{
        try{
            const newUser = new userModel({
                name:name,
                email:email,
                password:encryptData(password)
            });
            const result = await newUser.save()
            res.json({
                "status":"ok",
                "name":result.name
            });
        }catch(e){
            res.json({
                "status":"error",
                "error":"something went wrong!"
            });
        }
    }
   
}