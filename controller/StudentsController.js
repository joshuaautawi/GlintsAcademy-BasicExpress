
const Students = require('../student.json')


class StudentsController {
    static getAllStudents(req,res){
        let result = []
        Students.forEach((student)=> result.push(student))
        
        res.status(200).json(...result)
    }
}



module.exports = StudentsController
