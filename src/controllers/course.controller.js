const courseServices = require('../services/course.service')
const createCourse = async (req, res)=>{
    const data = req.data 
   const create = await courseServices.createCourse(data)   
   res.status(create.status).json(create)
}

const getCourses = async (req, res) => {
  const courses = await courseServices.readCourse() 
  res.status(courses.status).json(courses)
}
const getCourseById = async (req, res) => {
    const id = req.params.id
    const course = await courseServices.getCourseById(id)
    return course
}
const deleteCourse = async (req, res)=>{
    const id = req.params.id
    const course = await courseServices.deleteCourse(id) 
    res.status(course.status).json(course)
}
const updateCourse = async (req, res) => {
    const id = req.params.id
    const data = req.body
    const course = await courseServices.updateCourse(id, data) 
    res.status(course.status).json(course)
}

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    deleteCourse,
    updateCourse,
 
}