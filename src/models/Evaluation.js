const { required } = require('joi');
const { Schema, model } = require('mongoose');

const evaluationSchema = new Schema({
    score: {
        type: Number, 
        required: true,
    }, 
    level: {
        type: Schema.Types.ObjectId,
        ref: 'Level',
        required: true
    },
    student:{
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    }
}, { timestamps: true })

module.exports = model('Evaluation', evaluationSchema);