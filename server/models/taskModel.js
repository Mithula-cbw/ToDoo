const db = require('../db');

//create a task
const createTask = (task)=>{
    const {title,body,due_time,priority,status,user_id} = task;

    const taskPriority = priority || "medium";

    return new Promise((resolve, reject)=>{
        db.query('INSERT INTO tasks (title,body,due_time,priority,status,user_id) VALUES (?,?,?,?,?,?)', 
        [title,body,due_time,taskPriority,status,user_id], 
        (err, rslt)=>{
            if(err) reject(err);
            resolve(rslt);
        });
    });
}

const deleteTask = (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
        if (err) {
          reject(err); 
        } else {
          resolve(result); 
        }
      });
    });
  };
  
//read all tasks of a user
const getTasksById = (id, date) => {
    return new Promise((resolve, reject) => {
        // If date is provided, filter by date as well
        let query = 'SELECT * FROM tasks WHERE user_id = ?';
        let params = [id];

        if (date) {
            query += ' AND DATE(due_time) = ?';  // Filter tasks that match the date
            params.push(date);  // Add the date to the parameters
        }

        db.query(query, params, (err, rslt) => {
            if (err) {
                reject(err);
            }
            resolve(rslt);
        });
    });
};

const changeStatus = (id, status) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE tasks SET status = ? WHERE id = ?';
    db.query(query, [status, id], (err, result) => {
      if (err) {
        reject(err);  // Reject the promise if there's an error
      } else {
        resolve(result);  // Resolve the promise with the query result
      }
    });
  });
};



module.exports = {
                    createTask,
                    deleteTask,
                    getTasksById,
                    changeStatus
                 }