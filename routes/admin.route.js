const {Router} = require('express');
const router = Router();

const adminController = require('../src/controllers/admin.controller')
const {verifyLoginBody, verifyRegisterBody, verifyEmail, verifyOTP, verifyPassword} = require('../src/middlewares/admin.middleware');

router.post('/login', verifyLoginBody, adminController.login);
router.post('/register', verifyRegisterBody, adminController.register); 
router.post('/forgot-password', verifyEmail, adminController.forgotPassword);
router.post('/verify-otp', verifyOTP, adminController.verifyOTP);
router.post('/reset-password', verifyPassword, adminController.resetPassword);

module.exports = router