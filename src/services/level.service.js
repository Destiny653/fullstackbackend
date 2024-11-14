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

const readLevel = async () => {
    try {
        const courses = await Level.find();
        if (courses) {
            return {
                error: false,
                status: 200,
                message: "Courses retrieved successfully",
                courses
            }
        } else {
            return {
                error: true,
                status: 500,
                message: "Failed to retrieve courses"
            }
        }

    } catch (error) {
        return {
            error: true,
            status: 500,
            message: "An error occurred while retrieving courses",
            errorDetails: error.message
        }
    }
}

module.exports = { createLevel, readLevel }