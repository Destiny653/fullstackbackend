const userServices = require('../services/user.service')

const registerAdmin = async (req, res) => {
    const body = req.body
    const id = req.userId.data._id
    const data = {
        user: id,
        tel: body.tel,
        permissions: body.permissions
    }
    const admin = await userServices.registerAdmin(data)
    res.status(admin.error? 404 : 200).json(admin)
}
const registerInstructor = async (req, res) => {
    const body = req.body
    const id = req.userId.data._id
    const data = {
        user:id,
        years_of_experience: body.years_of_experience
    }
    console.log(data);
    
    const instructor = await userServices.registerInstructor(data)
    res.status(200).json(instructor)
}
const registerStudent = async (req, res) => { 
    const body = req.body
    const {level}= req.level
    const id = req.level.userId.data._id
    const data = {
        user: id, 
        enrollement_date: body.enrollement_date,
        level: level
    }
    const student = await userServices.registerStudent(data)
    res.status(200).json(student)
}
const getUsers = async(req, res)=>{
    const users = await userServices.getUsers()
    res.status(200).json(users)
}
const deleteUser = async(req, res)=>{
    const id = req.params.id
    const user = await userServices.deleteUserById(id)
    res.status(200).json(user)
}

module.exports = {
    registerAdmin,
    registerInstructor,
    registerStudent,
    getUsers,
    deleteUser,
}