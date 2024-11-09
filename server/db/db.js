
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME  
});

db.connect((error)=>{
    if(error){
        console.error("error connecting to the database", error.message);
    }else{
        console.log("connection successful");
    }
});

module.exports = db;
