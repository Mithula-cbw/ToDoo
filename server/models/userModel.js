const db = require('../db');

//get all users
const getAllUserList = ()=>{
    return new Promise((resolve, reject)=>{
        db.query('SELECT email FROM users', (err, results)=>{
            if(err) reject(err);
            resolve(results);
        })
    });
}


//check if a user exist with a given email
const checkEmailExists = (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) reject(err);
        resolve(results);
        });
    });
};

//get a user by their email
const getUserByEmail = (email)=>{
   return new Promise((resolve, reject)=>{
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results)=>{
        if(err) reject(err);
        resolve(results[0]);
    })
   });
}

//get a user by their id
const getUserById = (id)=>{
    return new Promise((resolve, reject)=>{
     db.query('SELECT * FROM users WHERE id = ?', [id], (err, results)=>{
         if(err) reject(err);
         resolve(results[0]);
     })
    });
 }

//create a new user 
const registerNewUser = (email, passwordHash) =>{
    return new Promise((resolve, reject)=>{
        db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, passwordHash], (err, results)=>{
            if(err) reject(err);
            resolve(results);
        });
    });
}


module.exports = {checkEmailExists, 
                  getUserByEmail, 
                  registerNewUser, 
                  getAllUserList,
                  getUserById
                };