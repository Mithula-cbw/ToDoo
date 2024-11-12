const db = require('../db');

//create a task
const createTask = (task)=>{
    const {title,body,due_time,priority,status,user_id} = task;

    return new Promise((resolve, reject)=>{
        db.query('INSERT INTO tasks (title,body,due_time,priority,status,user_id) VALUES (?,?,?,?,?,?)', 
        [title,body,due_time,priority,status,user_id], 
        (err, rslt)=>{
            if(err) reject(err);
            resolve(rslt);
        });
    });
}

//read all tasks of a user
const getTasksById = (id) =>{
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM tasks WHERE user_id = ?', [id], (err, rslt)=>{
            if(err) reject(err);
            resolve(rslt);
        })
    });
}

module.exports = {
                    createTask,
                    getTasksById
                 }