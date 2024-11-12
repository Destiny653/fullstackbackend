const evaluationService = require('../services/evaluation.service')

const createEvaluation = async(req, res)=>{
    const data = req.data 
   const evaluation = await evaluationService.createEvaluation(data)
   res.status(evaluation.error? 500 : 201).json(evaluation)
}

module.exports = {createEvaluation}