require('dotenv').config();
// console.log(process.env.DB_USER)
module.exports = {
    dataBaseUser: process.env.DB_USER,
    dataBasePassword: process.env.DB_PASSWORD,
    dataBaseHost: process.env.DB_HOST,
}