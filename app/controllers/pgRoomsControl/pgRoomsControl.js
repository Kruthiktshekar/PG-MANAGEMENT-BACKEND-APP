//requiring rooms model
const Rooms = require('../../model/pgRooms/roomsModel')

//creating an empty object
const roomsController = {}

//crud opreations, post
roomsController.create = (req,res) => {
    const data = new Rooms(req.body)
    data.save()
    .then((rooms)=>{
        res.json(rooms)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//get all rooms
roomsController.getAll = (req,res) => {
    Rooms.find()
    .then((rooms)=>{
        res.json(rooms)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//get particular room
roomsController.getOne = (req,res) => {
    const id = req.param.id
    Rooms.findById(id)
    .then((rooms)=>{
        res.json(rooms)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//update room
roomsController.update = (req,res) => {
    const id = req.param.id
    console.log(req.body)
    Rooms.findByIdAndUpdate(id,req.body, {new:true})
    .then((rooms)=>{
        res.json(rooms)
    })
    .catch((err) => {
        res.json(err)
    })
}

//delete room
roomsController.delete = (req,res) => {
    const id = req.param.id
    Rooms.findByIdAndDelete(id)
    .then((rooms)=>{
        res.json(rooms)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//export roomsController
module.exports = roomsController