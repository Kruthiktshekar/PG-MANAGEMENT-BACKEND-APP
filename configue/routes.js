//invoking express.router function
const express = require('express')
const route = express.Router()

//requiring middleware
const authMiddlewares = require('../app/middleWares/authMiddleWare')

//requiring ownerController
const ownerController = require('../app/controllers/pgOwnerControl/pgOwnerControl')

route.post('/createOwner',ownerController.create)
route.post('/ownerLogin',ownerController.login)
route.get('/getOwners',authMiddlewares,ownerController.getAll)
route.get('/getowner',authMiddlewares,ownerController.show)
route.put('/updateOwner',authMiddlewares,ownerController.update)
route.delete('/deleteOwner',authMiddlewares,ownerController.delete)

//requiring pgController
const pgController =  require('../app/controllers/pgControl/pgControl')

route.post('/createPg',authMiddlewares,pgController.create)
route.get('/getPgs',authMiddlewares,pgController.getAll)
route.get('/getPg/:id',authMiddlewares,pgController.getOne)
route.put('/updatePg/:id',authMiddlewares,pgController.update)
route.delete('/deletePg/:id',authMiddlewares,pgController.delete)

//requiring roomsController
const roomsController = require('../app/controllers/pgRoomsControl/pgRoomsControl')

route.post('/createRooms',authMiddlewares,roomsController.create)
route.get('/getRooms',authMiddlewares,roomsController.getAll)
route.get('/getRoom/:id',authMiddlewares,roomsController.getOne)
route.put('/updateRoom/:id',authMiddlewares,roomsController.update)
route.delete('/deleteRoom/:id',authMiddlewares,roomsController.delete)

//requiring tenentController
const tenentController = require('../app/controllers/pgTenentControl/pgTenentControl')

route.post('/createTenent',authMiddlewares,tenentController.create)
route.get('/getTenents',authMiddlewares,tenentController.getAll)
route.get('/getTenent/:id',authMiddlewares,tenentController.getOne)
route.put('/updateTenet/:id',authMiddlewares,tenentController.update)
route.delete('/deleteTenent/:id',authMiddlewares,tenentController.delete)

//exports route
module.exports = route