 const adminService = require('../services/admin.service')

const create = async(req, res, next)=>{
    const {level, student, score} = req.body
    if(!score || !student ||!level){
        return res.status(400).json({message: 'Missing required fields'})
    }

    const levelId = await adminService.getDataId('_id', level, 'Level')
    const studentId = await adminService.getDataId('_id', student, 'Student') 
    
    if(!studentId){
        return res.status(404).json(studentId)
    }

    if(!levelId){
        return res.status(404).json(levelId)
    } 

    req.data ={level , student, score}
    next()
}

module.exports = {create}