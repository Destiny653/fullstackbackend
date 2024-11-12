const Evaluation = require('../models/Evaluation')

const createEvaluation = async(info)=>{
    try { 
        const evaluation = new Evaluation(info)
       const data = await evaluation.save()
       if(data){
        return {
            error: false,
            message: 'Evaluation created successfully', 
            data
        }
    }else{
        return {
            error: true,
            message: 'Failed to create evaluation',
            data: null
        }
    }
    
    } catch (error) {
        return {
            error: true,
            message: 'Faild to create Evaluation: '+error.message,
            data: null
        }
        
    }
}

module.exports = {createEvaluation}