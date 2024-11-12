const { Schema, model } = require('mongoose');

const instructorSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    years_of_experience: {
        type: String,
        required: true
    },
    levels: [{
        type: Schema.Types.ObjectId,
        ref: "Level"
    }],
}, { timestamps: true })

instructorSchema.virtual(
    'level',
    {
        ref: 'Level',
        localField: '_id',
        foreignField: 'department'
    })
module.exports = model('Instructor', instructorSchema);