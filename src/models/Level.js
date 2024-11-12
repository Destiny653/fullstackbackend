const { required } = require('joi');
const { Schema, model } = require('mongoose');

const levelSchema = new Schema({
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
        required: true,
    },
    level_start_date: {
        type: String,
        required: true
    },
    level_end_date: {
        type: String,
        required: true
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: 'Instructor',
        required: true
    }, 
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student', 
    }], 
    courses: [{
            type: Schema.Types.ObjectId,
            ref: 'Course', 
    }],
    schedules: [{
            type: Schema.Types.ObjectId,
            ref: 'Schedule', 
    }],
}, { timestamps: true })


levelSchema.virtual(
    'student',
    {
        ref: 'Student',
        localField: '_id',
        foreignField: 'level'
    }
)
levelSchema.virtual(
    'course',
    {
        ref: 'Course',
        localField: '_id',
        foreignField: 'level'
    }
)
levelSchema.virtual(
    'schedule',
    {
        ref: 'Schedule',
        localField: '_id',
        foreignField: 'level'
    }
) 

module.exports = model('Level', levelSchema);