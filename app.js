const express = require('express');
const userRouter = require('./routes/userRouter');
const errorRoute = require('./utils/errorRoute');
// const cros = require('cros');

const app = express();

// enable cors orgin
// app.use(cros({
//     origin : "http://localhost:5024"
// }))

app.use(express.json());

app.use('/api/v1/users' , userRouter);

app.use(errorRoute);
module.exports = app;