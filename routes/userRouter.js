const express = require('express');
const { register, forgetPassword, resetPassword, login } = require('../controller/userController');

const userRouter = express.Router();

// public route
userRouter.post('/register' , register);
userRouter.post('/login' , login);
userRouter.post('/forgetpassword' , forgetPassword );
userRouter.post('/resetpassword/:token' ,  resetPassword);

module.exports = userRouter;