const express = require('express');
const taskController = require('../controllers/taskController');
const authenticateToken = require('../auth');

const taskRouter = express.Router();

//create a new task
taskRouter.post('/create-task',authenticateToken, taskController.createTask);
taskRouter.get('/:id',  taskController.getTasksById);
taskRouter.delete('/:id', authenticateToken, taskController.deleteTask);
taskRouter.put('/:id', taskController.changeStatus);

module.exports = taskRouter;