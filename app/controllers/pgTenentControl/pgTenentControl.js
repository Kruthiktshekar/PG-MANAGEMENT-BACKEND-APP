//requiring tenent model
const Tenent = require('../../model/pgTenent/tenentModel')

//creating an empty object
const tenentController = {}

//crud operations, post
tenentController.create = (req,res) => {
    const data = new Tenent(req.body)
    data.save()
    .then((tenent)=>{
        res.json(tenent)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//get all tenent
tenentController.getAll = (req,res) => {
    Tenent.find()
    .then((tenent)=>{
        res.json(tenent)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//get particular tenet 
tenentController.getOne = (req,res) => {
    const id = req.param.id
    Tenent.findById(id)
    .then((tenent)=>{
        res.json(tenent)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//update tenet
tenentController.update = (req,res) => {
    const id = req.param.id
    Tenent.findByIdAndUpdate(id, req.body, {new:true})
    .then((tenent)=>{
        res.json(tenent)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//delete tenent
tenentController.delete = (req,res) => {
    const id = req.param.id
    Tenent.findByIdAndDelete(id)
    .then((tenent)=>{
        res.json(tenent)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//export tenet
module.exports = tenentController