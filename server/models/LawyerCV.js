const Schema = require('mongoose').Schema;


const lawyerSchema = new require('mongoose').Schema({
    username:String,
    name: String,
    image: {
        type: String, default: ''
    },
    bio:String,
    email:String,
    education:String,
    bufete:String,
    category:String,
    questions:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Question'
        }
    ]
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});



module.exports = require('mongoose').model('Lawyer', lawyerSchema);