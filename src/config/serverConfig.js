const dotenv = require('dotenv');

// dotenv.config({path: __dirname+'../.env'});

// console.log(process.env);
 dotenv.config();
module.exports = {
    PORT: process.env.PORT
}