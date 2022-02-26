const mongoose = require('mongoose')
const Owner = require('../pgOwner/OwnerModel')
const Schema = mongoose.Schema

// pg schema
const pgSchema = new Schema({
    name : {
        type : String,
        min : 8,
        max : 16
    },
    address : {
        type : String
    },
    landmark : {
        type : String
    },
    pincode : {
        type : Number
    },
    ownerid : {
         type : Schema.Types.ObjectId,
         ref : 'Owner'
    }
})

//creating pg model
const Pg = mongoose.model('Pg',pgSchema)

//exports model
module.exports = Pg