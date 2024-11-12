const {Router} = require('express');
const router = Router();
const {registerCourse} = require('../src/middlewares/course.middleware')
const courseController = require('../src/controllers/course.controller')

     router.post('/create', registerCourse, courseController.createCourse)
     router.get('/get', courseController.getCourses)
     router.put('/update/:id', courseController.updateCourse)
     router.delete('/delete/:id', courseController.deleteCourse)

module.exports = router