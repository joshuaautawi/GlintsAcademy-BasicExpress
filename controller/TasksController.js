const Tasks = require('../task.json')

class TasksController{
    static getAllTasks (req,res){
       const result = []
        Tasks.forEach((task)=> {
            result.push(task)
        })
        res.status(200).json(...result)    
    }
    
}

module.exports = TasksController