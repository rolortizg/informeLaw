const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;


const questionSchema = new require('mongoose').Schema({
    // username: String,
    title: String,
    content: String,
    category:String,
    
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

questionSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = require('mongoose').model('Question', questionSchema);