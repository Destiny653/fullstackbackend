const { required } = require('joi');
const { Schema, model, trusted } = require('mongoose');

const notificationSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['message', 'assignment', 'reminder'],
        default: 'message'
    },
    message: {
        type: String,
        required: true
    } 
},
    { timestamps: true })

module.exports = model('Notification', notificationSchema);