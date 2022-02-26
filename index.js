//require express and invoke in a new variable
const express = require('express')
const app = express()
app.use(express.json())

//connecting to database
const configueDb = require('./configue/db')
configueDb()

//requiring routes
const route = require('./configue/routes')
app.use(route)


//starting server
app.listen(4050,()=>{
    console.log('server started')
})