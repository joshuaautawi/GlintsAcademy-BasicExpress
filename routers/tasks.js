const router = require('express').Router()
const tasksController = require('../controller/TasksController')

router.get('/',tasksController.getAllTasks)


module.exports = router