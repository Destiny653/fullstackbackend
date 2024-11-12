const {Router} = require('express');
const router = Router();  

const indexController = require('../src/controllers/index.controller')
const {validateForm} = require('../src/middlewares/validations/form.validation')
const authMiddleware = require('../src/middlewares/admin.middleware')

router.post('/', authMiddleware.isLogin, authMiddleware.isAdmin, validateForm, indexController.testValidationWithJoi);

module.exports = router