const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;


const lawyerSchema = new require('mongoose').Schema({
    name: String,
    photoURL: String,
    bio:String,
    email:String,
    education:String,
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

lawyerSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = require('mongoose').model('Lawyer', lawyerSchema);