const router = require('express').Router()
const HomeController = require('../controller/HomeController')
const tasksRoute = require('./tasks')
const studentRoute = require('./students')

router.get('/',HomeController.homePage)
router.use('/tasks',tasksRoute)
router.use('/students',studentRoute)



module.exports = router