const express = require('express');
const userController = require('../controllers/userController');

const registerRouter = express.Router();

registerRouter.post('/log-in', userController.checkEmail);
registerRouter.post('/register', userController.registerUser);

module.exports = registerRouter;