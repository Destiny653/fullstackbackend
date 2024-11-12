const {Schema, model} = require('mongoose');

const departmentSchema = new Schema({ 
    department:{
        type: String,
        enum: ['Web developement', 'Cyber security', 'Digital marketting', 'Graphic designing'],
        required: true
    },
    levels: [{
        type: Schema.Types.ObjectId,
        ref: "Level"
    }],
},{timestamps:true})

departmentSchema.virtual(
    'level',
    {
        ref: 'Level',
        localField: '_id',
        foreignField: 'department'
    }
)

module.exports = model('Department', departmentSchema);