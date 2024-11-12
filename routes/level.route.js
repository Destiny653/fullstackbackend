const {Router} = require('express');
const router = Router(); 
const levelController = require('../src/controllers/level.controller');
const levelMiddleware = require('../src/middlewares/level.middleware');

   router.post('/create', levelMiddleware.create, levelController.createLevel) 

module.exports = router