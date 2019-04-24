const router = require('express').Router()
const {User,Product} = require('../models')

router.get('/', function (req, res) {
    User.findAll({
        where : {
            role : 'customer'
        }
    })
    .then(function (data) {
        res.send(data)    
    })
})


module.exports = router