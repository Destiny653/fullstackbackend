const adminService = require('../services/admin.service');

const create = async(req, res, next)=>{
    const {level, level_start_date, level_end_date, instructor, department} = req.body;
    if(!level ||!level_start_date ||!level_end_date ||!instructor ||!department){
        return res.status(400).json({message: 'All fields are required'});
    }
    const departmentId = await adminService.getDataId('_id', department, 'Department') 
    const instructorId = await adminService.getDataId('_id', instructor, 'Instructor')
    if(!instructorId ||!departmentId){
        return res.status(404).json({message: 'Instructor or department not found: '+departmentId})
    }
    if(!departmentId){
        return res.status(404).json({message: 'Department not found: '+ departmentId})
    } 

    req.data = {level, level_start_date, level_end_date, instructor, department};
    next();
}

module.exports = {create}