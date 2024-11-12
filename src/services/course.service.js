const Course = require('../models/Course');

const createCourse = async (data) => {
    try {
        const newCourse = new Course(data);
        const savedCourse = await newCourse.save();
        return {
            error: false,
            status: 201,
            message: "Course created successfully",
            course: savedCourse
        }
    } catch (error) { 
        return {
            error: true,
            status: 500,
            message: "An error occurred while creating course",
            errorDetails: error.message
        }
    }
}
const readCourse = async () => {
    try {
        const courses = await Course.find().populate({path:'level', populate: {path: 'department'}});
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
const updateCourse = async (courseId, data) => {
    const updatedCourse = await Course.findByIdAndUpdate(
        courseId,
        data,
        { new: true }
    )
    try {
        if (updatedCourse) {
            return {
                error: false,
                status: 200,
                message: "Course updated successfully",
                course: updatedCourse
            }
        } else {
            return {
                error: true,
                status: 500,
                message: "Failed to update course"
            }
        }

    } catch (error) {
        return {
            error: true,
            status: 500,
            message: "An error occurred while updating course",
            errorDetails: error.message
        }
    }
}
const deleteCourse = async (courseId) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(courseId); 
        if (!deletedCourse) {
            return {
                error: true,
                status: 500,
                message: "Failed to delete course"
            }
        }
        return {
            error: false,
            status: 200,
            message: "Course deleted successfully"
        }

    } catch (error) {
        return {
            error: true,
            status: 500,
            message: "An error occurred while deleting course",
            errorDetails: error.message
        }
    }
}

module.exports = { createCourse, readCourse, updateCourse, deleteCourse };