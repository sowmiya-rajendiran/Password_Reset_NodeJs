const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        required : [true , "Email is required"]
    },
    password : {
        type: String,
        required: [true, "Password is required"],
        minlength: 2,
    }
},{timestamps : true})

const userModel = mongoose.model("user",userSchema,"Users");

module.exports = userModel;