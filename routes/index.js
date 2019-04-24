const Router = require('express').Router()

Router.get('/', (req, res)=>{
    res.render('./home/index.ejs')
})

module.exports = Router