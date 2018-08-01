const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;


const userSchema = new require('mongoose').Schema({
    username: String,
    photoURL: String,
    email: String,
    profile:{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    role:{
        type: String,
        enum: ['USER', 'LAWYER', 'ADMIN'],
        default: 'USER'
    },
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

userSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = require('mongoose').model('User', userSchema);