const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String ,
        required : [true , 'email id required'] ,
        trim : true ,
        unique : true,
        lowercase : true,
        match : [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address'
        ]
    },
    password : {
        type: String,
        required: [true, "Password is required"],
        minlength: 2,
    }
},{timestamps : true})

const userModel = mongoose.model("user",userSchema,"Users");

module.exports = userModel;