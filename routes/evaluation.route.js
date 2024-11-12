const {Router} = require('express');
const router = Router(); 
const evaluationController = require('../src/controllers/evaluation.controller');
const evaluationMiddleware = require('../src/middlewares/evaluation.middleware');

   router.post('/create', evaluationMiddleware.create, evaluationController.createEvaluation) 

module.exports = router