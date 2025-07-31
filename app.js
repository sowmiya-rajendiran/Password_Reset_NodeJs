const express = require('express');
const cors = require('cors'); 
const userRouter = require('./routes/userRouter');
const errorRoute = require('./utils/errorRoute');

const app = express();

//  allow requests from frontend
app.use(cors({
  origin: "https://passwordre.netlify.app/",
  credentials: true,
}));

app.use(express.json());

app.use('/api/v1/users' , userRouter);

app.use(errorRoute);
module.exports = app;