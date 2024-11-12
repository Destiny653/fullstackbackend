const levelSercice = require('../services/level.service');

const createLevel = async(req, res)=>{
    const data = req.data;
    const level = await levelSercice.createLevel(data);
    res.status(level.error? 404 : 201).json(level);
}

module.exports = {createLevel}