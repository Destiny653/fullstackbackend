const {Schema, model} = require('mongoose');

const adminSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    tel:{
        type: String,
        required: true
    },
    permissions: {
        type: String,
        enum: ['manage_users', 'manage_courses'],
        required: true
    } 
})

module.exports = model('Admin', adminSchema);