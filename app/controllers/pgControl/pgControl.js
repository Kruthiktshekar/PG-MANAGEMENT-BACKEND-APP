//requiring pg model
const Pg = require('../../model/Pg/pgModel')
const jwt = require('jsonwebtoken')

//creating an empty object 
const pgController = {}

//crud operations,post
pgController.create = (req,res) => {
  const data = req.body
  const pg = new Pg(pg)
  pg.ownerId = req.owner.id
  pg.save()
  .then((pg)=>{
    res.json(pg)
 })
 .catch((err)=>{
    res.json(err)
 })
}
//get all pg
pgController.getAll = (req,res) =>{
    Pg.find()
    .then((pg)=>{
      res.json(pg)
    })
    .catch((err)=>{
         res.json(err)
    })
}

//get particular pg
pgController.getOne = (req,res) => {
    const id = req.params.id
    Pg.findById(id)
    .then((pg)=>{
        res.json(pg)
    })
    .catch((err)=>{
         res.json(err)
    })
}

//update pg
pgController.update = (req,res) => {
    const id = req.param.id
    Pg.findByIdAndUpdate(id, req.body, {new:true})
    .then((pg)=>{
          res.json(pg)
     })
    .catch((err)=>{
        res.json(err)
    })
}

//delete pg
pgController.delete = (req,res) => {
    const id = req.param.id
    Pg.findByIdAndDelete(id)
    .then((pg)=>{
        res.json(pg)
     })
    .catch((err)=>{
      res.json(err)
    })
}

module.exports = pgController