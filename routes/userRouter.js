const express = require('express');
const { register, forgetPassword, resetPassword } = require('../controller/userController');

const userRouter = express.Router();

userRouter.post('/' , register);
userRouter.post('/forgetpassword' , forgetPassword );
userRouter.post('/resetpassword/:token' ,  resetPassword);

module.exports = userRouter;