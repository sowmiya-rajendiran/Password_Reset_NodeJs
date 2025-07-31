const userModel = require("../model/user");
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const tokenModel = require("../model/passwordResetToken");
const sendResetEmail = require("../utils/sendEmail");

const userContoller = {
    register : async (req , res) =>{
        try{
            const {name , email , password } = req.body;
            // check exist user
            const existUser = await userModel.find({email});
            if(existUser.length > 0 ){
                return res.status(500).json({message : "User already exist"})
            }
            // password encrypt
            const hashPassword = await bcrypt.hash(password , 10);

            const newRegister = new userModel({
                name,
                email,
                password : hashPassword
            })
            await newRegister.save();

            res.status(200).json({message : "Register Successfully" , NewRegister : newRegister})
        }
        catch(err){
            res.status(500).json({message : "Error Register" , Error : err.message})
        }

    },
    forgetPassword : async (req , res) => {
        try{
            const {email} = req.body;
            // check exist user
            const user = await userModel.findOne({ email });
            if (!user) return res.status(404).json({ message: "Email Id not found in Database" });
            
            // generate random string token
            const token =  crypto.randomBytes(32).toString("hex");

            // Save new token in DB
            await tokenModel.create({
                userId: user._id,
                token,
                expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
            });
            
            await sendResetEmail(email , token);
            return res.status(200).json({message : "Email Send Successfully" , token : token})

        }
        catch(err){
            res.status(500).json({message : "Error forgetPassword Contoller" , Error : err.message})
        }
    },
    resetPassword : async (req , res) =>{
        try{
            const {token} = req.params ;
            const {password} = req.body ;
            // find token
            const resetToken = await tokenModel.findOne({token});
            // check valid token 
            if(!resetToken || resetToken.expiresAt < Date.now()){  
                return res.status(400).json({ message: "Invalid or expired token" });
            }

            const user = await userModel.findById(resetToken.userId);
            if(!user) return res.status(404).json({ message: "User not found" });

            // password encrypt
            const hashResetPassword = await bcrypt.hash(password , 10);

            user.password = hashResetPassword;

            await user.save();

            await tokenModel.deleteOne({ _id: resetToken._id });

            res.status(200).json({ message: "Password reset successful" });

        }catch(err){
            res.status(500).json({message : "Error reset password controller" , Error : err.message})
        }
    }
}

module.exports = userContoller;