const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;


const lawyerSchema = new require('mongoose').Schema({
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
        default: 'LAWYER'
    },
    products:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
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