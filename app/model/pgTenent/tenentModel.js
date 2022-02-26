//requiring mongoose and schema method
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//creating schema for tenent
const tenentSchema = new Schema ({
    name : {
        type : String,
        min : 6,
        max : 16
    },
    phone : {
        type : Number,
        min : 10
    },
    email : {
        type : String,
        unique : true
    },
    age : {
        type : Number
    },
    address : {
        type : String
    },
    joinDate : {
        type : Date,
        default : Date.now()
    },
    collegeId : {
        type : String
    },
    adhar : {
        type : Number
    }
})

//creating model of tenent
const Tenent = mongoose.model('Tenent',tenentSchema)

//export tenent model
module.exports = Tenent