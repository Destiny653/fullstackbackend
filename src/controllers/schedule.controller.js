const scheduleService = require('../services/schedule.service');

const createSchedule = async (req, res) => {
    const data = req.data;
    const schedule = await scheduleService.createSchedule(data);
    res.status(schedule.error? 404 : 201).send(schedule);
}

module.exports = {createSchedule};