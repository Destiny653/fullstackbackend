const Schedule = require('../models/Schedule');

const createSchedule = async (info) => {
    try {
        const schedule = new Schedule(info);
        const data = await schedule.save();
        if (data) {
            return {
                error: false,
                message: 'Schedule created successfully',
                data
            }
        } else {
            return {
                error: true,
                message: 'Failed to create schedule',
                error
            }
        }
    } catch (error) {
        return {
            error: true,
            message: 'Faild to create Schedule: '+error.message,
            data: null
        }
    }
}

module.exports = {createSchedule};