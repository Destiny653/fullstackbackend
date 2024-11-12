const Joi = require('joi');

const validateForm = (req, res, next)=>{

    const schema = Joi.object({
        username: Joi.string().min(3).max(10).required(), 
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(20).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required()
    });
    
    const {error} = schema.validate(req.body);
     if(error){
         console.error(error.details);
         res.status(400).json({
            success: false,
            message: error.details.details.map(detail=>({
                message: detail.message,
                path: detail.path.join('.')
            })) 
        });
         return;
     }
     next();
    
}

module.exports = {validateForm}