const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;


const userSchema = new require('mongoose').Schema({
    username: String,
    image: String,
    email: String,
    profile:{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    role:{
        type: String,
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