const dotenv = require('dotenv');

dotenv.config({path: __dirname+'../.env'});
// console.log(process.env);
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
module.exports = {
    PORT: process.env.PORT
}