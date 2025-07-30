require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI ;
const PORT = process.env.PORT || 3003 ;
const EMAIL = process.env.EMAIL;
const PASS = process.env.PASS;

module.exports = {MONGODB_URI , PORT , EMAIL , PASS}