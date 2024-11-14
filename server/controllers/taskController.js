const taskModel = require('../models/taskModel');

//create a new task
const createTask = async (req, res) => {
    const { task } = req.body;

    try {
        // Await the result of the async createTask function
        const newTask = await taskModel.createTask(task);

        if (newTask) {
            res.status(200).send(newTask);
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

const deleteTask = async (req, res) => {
    const { id } = req.params;
  
    try {
      const taskDel = await taskModel.deleteTask(id);
  
      if (taskDel.affectedRows > 0) { // Check if any rows were affected (i.e., a task was deleted)
        res.status(200).json({ message: "Task deleted successfully" });
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete task", details: error.message });
    }
  };
  
//get all task of a user by their id
const getTasksById = async(req, res) =>{
    const {id} = req.params;
    const { date } = req.query;

    try{
        const tasks = await taskModel.getTasksById(id, date);

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

const changeStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.query;
  
    if (!status) {
      return res.status(400).json({ message: "Status query parameter is required" });
    }
  
    try {
      const taskEdit = await taskModel.changeStatus(id, status);
      
      if (taskEdit.affectedRows > 0) { // Check if any rows were affected
        return res.status(200).json({ message: "Task status updated successfully" });
      } else {
        return res.status(404).json({ message: "Task not found" });
      }
    } catch (error) {
      console.error("Error updating task:", error); // Log the error for debugging
      return res.status(500).json({ error: "Failed to update task", details: error.message });
    }
  };
  


module.exports = { 
                    createTask,
                    deleteTask,
                    getTasksById,
                    changeStatus
                };