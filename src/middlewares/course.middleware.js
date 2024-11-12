const adminService = require('../services/admin.service')

const registerCourse = async(req, res, next)=>{
    const {title, duration, level} = req.body
    if(!title ||!duration ||!level){
         res.status(400).json({message: 'All fields are required'})
    }

    const levelId = await adminService.getDataId('_id', level, 'Level') 
    if(!levelId){
        return res.status(404).json(levelId)
    }
    req.data = {title, duration, level}
    next()
} 

module.exports = {
    registerCourse
}