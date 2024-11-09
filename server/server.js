const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');
const registerRoutes = require('./routes/userRoutes');
require('dotenv').config(); 

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', registerRoutes);

app.listen(process.env.PORT, ()=>{
    console.log('Listening on port', process.env.PORT);
});