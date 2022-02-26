//requiring owner model
const Owner = require('../../model/pgOwner/OwnerModel')
const authMiddlewares = require('../../middleWares/authMiddleWare')

//requiring bcryptjs and jwt 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//creating an empty obejct for crud operation 
const ownerController = {}

//crud operation, post method
ownerController.create = (req,res) => {
    const data = req.body
    const owner = new Owner(data)
    bcrypt.genSalt()
    .then((salt)=>{
        console.log('salt =',salt)
        bcrypt.hash(data.password,salt)
        .then((encrypt)=>{
            console.log('ENCRYPTED',encrypt)
            owner.password = encrypt
            owner.save()
            .then((owner)=>{
                res.json(owner)
            })
            .catch((err)=>{
                res.json(err)
            })
        })
        .catch((err)=>{
            res.json(err)
        })
    })
    .catch((err)=>{
        res.json(err)
    })
}

//login
ownerController.login = (req,res) => {
    const data = req.body
    Owner.findOne({email : data.email})
    .then((owner)=>{
        console.log('user=', owner)
        if(!owner){
            res.json({err : 'user is not found'})
        }
        bcrypt.compare(data.password,owner.password)
        .then((verify)=>{
            console.log('rec',verify)
            const payload = {
                id :  owner._id,
                name : owner.name,
                createdAt : owner.createdAt
            }
            const token = jwt.sign(payload,'owner123',{expiresIn : '2d'})
            res.json({token : `Bearer ${token}`})
        })
        .catch((err)=>{
            res.json(err)
        })
    })
    .catch((err)=>{
        res.json(err)
    })
}
//show particular  owner
ownerController.show = (req,res) => {
    const id = req.owner.id
    Owner.findById(id)
    .then((owner)=> {
        res.json(owner)
    })
    .catch((err)=>{
        res.json(err)
    })
}
//show all owners
ownerController.getAll = (req,res) =>{
    Owner.find()
    .then((owner)=>{
        res.json(owner)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//update owner
ownerController.update = (req,res)=>{
    const data = req.body
   Owner.findByIdAndUpdate(req.owner.id,data,{new:true})
   .then((owner)=>{
      res.json(owner)
   })
   .catch((err)=>{
      res.json(err)
    })
  
}

//delete owner
ownerController.delete = (req,res)=>{
    const id = req.owner.id
    Owner.findByIdAndDelete(id)
    .then((owner)=>{
        res.json(owner)
    })
    .catch((err)=>{
        res.json(err)
    })
}
    

module.exports = ownerController