const Router = require('express').Router()
const Model = require('../models')

Router.get('/', (req, res)=>{
    res.render('./user/signup.ejs')
})

Router.post('/', (req, res)=>{
    let input = req.body
    if (input.psw === input.pswrepeat){
        Model.User.cekEmail(input.email)
        .then((isUnique)=>{
            if (isUnique){
                Model.User.create({
                    email: input.email,
                    password: input.psw,
                    name: input.name,
                    gender: input.sex,
                    phone: input.phone,
                    createdAt: new Date(),
                    updatedAt: new Date()
                })
                .then(()=>{
                    res.redirect('/')
                })
                .catch((err)=>{
                    res.send(err)
                })            
            }else{
                throw new Error(`Email already registered`)
            }
        })
        .catch((err)=>{
            res.send(`err : ${err}`)
        })    
    }else{
        res.send(`password tidak sama`)
    }
})

module.exports = Router