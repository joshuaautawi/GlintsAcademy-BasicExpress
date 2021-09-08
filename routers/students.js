const router = require('express').Router()
const StudentsController = require('../controller/StudentsController')



router.get('/',StudentsController.getAllStudents)


module.exports = router
