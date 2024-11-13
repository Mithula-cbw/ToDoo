const jwt = require('jsonwebtoken'); 
require('dotenv').config();


const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];  // Token is sent as 'Bearer token'

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }


  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token.' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = authenticateToken;
