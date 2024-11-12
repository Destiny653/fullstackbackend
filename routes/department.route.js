const {Router} = require('express');
const router = Router();

const departmentController = require('../src/controllers/department.controller');
const departmentMiddleware = require('../src/middlewares/department.middleware');

router.post('/create', departmentMiddleware.create, departmentController.createDepartment);
module.exports = router;