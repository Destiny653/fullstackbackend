const levelService = require('../services/level.service');

const createLevel = async(req, res)=>{
    const data = req.data;
    const level = await levelService.createLevel(data);
    res.status(level.error? 404 : 201).json(level);
}
const getLevel = async (req, res) => {
    const courses = await levelService.readLevel() 
    res.status(courses.status).json(courses)
  }

module.exports = {createLevel, getLevel}