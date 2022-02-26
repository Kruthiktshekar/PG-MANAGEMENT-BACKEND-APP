const mongoose = require('mongoose')
const Schema = mongoose.Schema

// rooms Schema
const roomsSchema = new Schema({
    roomNo : {
        type : String
    },
    isAvailable : {
        type : Boolean
    },
    pgId : {
        type : Schema.Types.ObjectId,
        ref : 'Pg'
        
    },
    tenentId : {
        type : Schema.Types.ObjectId,
        ref : 'Tenent'
    }
})

//creating room model
const Rooms = mongoose.model('Rooms',roomsSchema)

//export room model
module.exports = Rooms