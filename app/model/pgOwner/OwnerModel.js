const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Owner Schema
const ownerSchema = new Schema({
    name : {
        type : String,
        unique : true,
        min : 10,
        max : 16
    },
    phoneNumber : {
        type : Number,
        min : 10
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

//create a model
const Owner = mongoose.model('Owner',ownerSchema)

//export owner model
module.exports = Owner