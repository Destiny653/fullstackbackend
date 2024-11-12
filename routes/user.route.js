const {Router} = require('express');
const router = Router();
const userMiddleware = require('../src/middlewares/user.middleware')
const userController = require('../src/controllers/user.controller')


   router.post('/admin', userMiddleware.admin, userController.registerAdmin)
   router.post('/instructor', userMiddleware.instructor, userController.registerInstructor)
   router.post('/student', userMiddleware.student, userController.registerStudent)
   router.get('/', userController.getUsers)
   router.delete('/delete/:id', userController.deleteUser)

module.exports = router