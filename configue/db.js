const mongoose = require('mongoose')

const configueDb = ()=>{
    mongoose.connect('mongodb://localhost:27017/pgManage')
    .then((res)=>{
        console.log('db is connected successfully')
    })
    .catch((err)=>{
        console.log('error while connecting db')
    })
}

module.exports = configueDb