const Admin = require('../models/Admin');
const Instructor = require('../models/Instructor');
const Student = require('../models/Student');
const User = require('../models/User');


const getDataId = async (key, value) => {
    try {
        const data = await User.findOne({ [key]: value }).exec();
        if (data) {
            return {
                error: false,
                message: 'Id returned successfully',
                data
            }
        } else {
            return {
                error: true,
                message: 'Data not found',
                field: key
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}


const registerAdmin = async (data) => {
    try {
        const admin = new Admin(data);
        await admin.save();
        return {
            error: false,
            message: 'Admin registered successfully',
            data: admin
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

const registerStudent = async (data) => {
    try {
        const student = new Student(data);
        await student.save();
        return {
            error: false,
            message: 'Student registered successfully',
            data: student
        }
    } catch (error) {
        return {
            error: true,
            message: 'Faild to create User: '+error.message
        }
    }
}

const registerInstructor = async (data) => {
    try {
        const instructor = new Instructor(data);
        await instructor.save();
        return {
            error: false,
            message: 'Instructor registered successfully',
            data: instructor
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

const getUsers = async()=>{
    try {
        const users = await User.find().exec();
        return {
            error: false,
            message: 'Users retrieved successfully',
            users
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

const deleteUserById = async(id)=>{
    try {
        const user = await User.findByIdAndDelete(id).exec();
        if(user){
            return {
                error: false,
                message: 'User deleted successfully'
            }
        } else {
            return {
                error: true,
                message: 'User not found'
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

module.exports = {
    registerAdmin,
    registerStudent,
    registerInstructor,
    getDataId,
    getUsers,
    deleteUserById,

};