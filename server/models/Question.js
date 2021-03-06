const Schema = require('mongoose').Schema;


const questionSchema = new require('mongoose').Schema({
    username: String,
    title: String,
    content: String,
    category:String,
    lawyer:String,
    role: {
        type:String,
        default:'USER'
    },
    count:{
        type:Number,
        default:0
    },
    answer:{
        type:String,
        default:'no'
    }
    
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


module.exports = require('mongoose').model('Question', questionSchema);