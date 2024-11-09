const db = require('../db');

const checkEmailExists = (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) reject(err);
        resolve(results);
        });
    });
};

module.exports = {checkEmailExists};