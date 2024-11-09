const express = require('express');
const userController = require('../controllers/userController');

const registerRouter = express.Router();

registerRouter.post('/sign-in', userController.checkEmail);
registerRouter.post('/register', userController.registerUser);
registerRouter.post('/log-in', userController.logIn);

module.exports = registerRouter;