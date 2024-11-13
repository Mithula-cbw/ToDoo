const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const registerRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config(); 

const app = express();

//middleware
app.use(cors()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/user', registerRoutes);
app.use('/task' , taskRoutes);


app.listen(process.env.PORT, ()=>{
    console.log('Listening on port', process.env.PORT);
});