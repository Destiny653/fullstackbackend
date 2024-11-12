const adminService = require('../services/admin.service');
const create = async(req, res, next) =>{
    const {start_time, end_time, level} = req.body;
    if(!start_time || !end_time ||!level){
        return res.status(400).json({message: 'Missing required fields'});
    }

    const levelId = await adminService.getDataId('_id', level, 'Level') 
    if(!levelId){
        return res.status(404).json(levelId)
    } 
    req.data = {start_time, end_time, level};
    next();
}

module.exports = {create};