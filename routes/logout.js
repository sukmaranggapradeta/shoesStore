const Router = require('express').Router()

Router.get('/', (req, res)=>{
    req.session.loginStatus = false
    req.session.userName = ""
    res.redirect('/')
})

module.exports = Router