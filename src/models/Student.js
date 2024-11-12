const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
        required: true
    }, 
    enrollement_date: {
        type: String,
        required: true
    },
    evaluations: [{
        type: Schema.Types.ObjectId,
        ref: 'Evaluation', 
}],

}, { timestamps: true })

studentSchema.virtual(
   'evaluation',
   {
       ref: 'Evaluation',
       localField: '_id',
       foreignField: 'student'
   })

module.exports = model('Student', studentSchema);