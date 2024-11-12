const taskModel = require('../models/taskModel');

//create a new task
const createTask = async (req, res) => {
    const { task } = req.body;

    try {
        // Await the result of the async createTask function
        const newTask = await taskModel.createTask(task);

        if (newTask) {
            res.status(200).send('Task added');
            console.log('Task added:', newTask);
        } else {
            res.status(400).send("Couldn't create task");
            console.log("Couldn't create task");
        }
    } catch (err) {
        console.error("Error creating task:", err.message);  // Log full error to console
        res.status(400).send(`Error creating task: ${err.message}`);
    }
};

//get all task of a user by their id
const getTasksById = async(req, res) =>{
    const {id} = req.params;

    try{
        const tasks = await taskModel.getTasksById(id);

        if(tasks.length > 0){
            res.status(200).json({tasks});
            console.log("task found", tasks);
        }else{
            res.status(200).send('no tasks for the user yet');
            console.log('no tasks for the user yet');
        }
    }catch(err){
        res.status(400).send(`error fetching data: ${err.message}`);
        console.log("error:" ,err.message);

    }
}



module.exports = { 
                    createTask,
                    getTasksById
                };