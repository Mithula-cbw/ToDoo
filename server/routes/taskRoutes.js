const express = require('express');
const taskController = require('../controllers/taskController');

const taskRouter = express.Router();

//create a new task
taskRouter.post('/create-task', taskController.createTask);
taskRouter.get('/:id', taskController.getTasksById);

module.exports = taskRouter;