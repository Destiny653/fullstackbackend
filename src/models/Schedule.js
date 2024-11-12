const { Schema, model } = require('mongoose');
const Instructor = require('./Instructor');

const scheduleSchema = new Schema({
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    level: {
        type: Schema.Types.ObjectId,
        ref: 'Level',
        required: true
    },
}, { timestamps: true })

module.exports = model('Schedule', scheduleSchema);