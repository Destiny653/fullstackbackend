const Level = require('../models/Level')
const Instructor = require('../models/Instructor')
const Department = require('../models/Department')


const createLevel = async (info) => {
    try {
        const data = await Level.create(info)
        if (data) {
            return {
                error: false,
                message: 'Level created successfully',
                data
            }
        } else {
            return {
                error: true,
                message: 'Failed to create level'
            }
        }
    } catch (error) {
        return {
            error: true,
            message: 'Faild to create Level: '+error.message,
            data: null
        }
    }
}

module.exports = { createLevel }