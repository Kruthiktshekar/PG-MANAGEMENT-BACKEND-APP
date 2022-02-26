const jwt = require('jsonwebtoken')
const authMiddlewares = (req,res,next) =>{
    const token = req.header('Authorization').split(' ')[1]
    let result
    try {
        result = jwt.verify(token,'owner123')
        req.owner = result
        next()
    } catch (err) {
        res.json(err)
    }
}

module.exports = authMiddlewares