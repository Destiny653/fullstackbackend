const userService = require('../services/user.service')
const adminService = require('../services/admin.service')

const admin = async(req, res, next)=>{
    const body = req.body
    if(!body.tel || body.tel.length < 10){
        return res.status(400).json({error: 'Invalid phone number'})
    }
    if(!body.permissions){
        return res.status(400).json({error: 'Permissions are required'})
    }
    if(!body.email){
        return res.status(400).json({
            error:true,
            message: 'email is required'})
    }
    const isUserId = await userService.getDataId('email', body.email)
    
    if(!isUserId){
        return res.status(400).json({error: true,
            message: 'User not found',
            isUserId  
        })
    }
    req.userId = isUserId
    next()
}
const instructor = async(req, res, next)=>{
    const body= req.body
    if(!body.years_of_experience){
        return res.status(400).json({error: 'Years of experience is required'})
    }
    if(!body.email){
        return res.status(400).json({
            error:true,
            message: 'email is required'})
    }
    const isUserId = await userService.getDataId('email', body.email)
    if(!isUserId){
        return res.status(400).json({error: true,
            message: 'User not found',  
            isUserId
        })
    }
    req.userId = isUserId
    next()
}
const student = async(req, res, next)=>{
    const  {level, enrollement_date, email}= req.body
    if(!enrollement_date || !level){
        return res.status(400).json({error: 'Invalid level or enrollement date'})
    }

    if(!email){
        return res.status(400).json({
            error:true,
            message: 'email is required'})
    }
    const userId = await userService.getDataId('email', email)
    console.log('isUserId', userId);
    if(!userId){
        return res.status(400).json({error: true,
            message: 'User not found', 
            userId 
        })
    }
    
    const levelId = await adminService.getDataId('_id', level, 'Level')
    console.log('userId', userId);
    if(!levelId){
        return res.status(404).json(levelId)
    } 
    req.level ={level, userId}

    next()
}

module.exports = {admin, instructor, student}