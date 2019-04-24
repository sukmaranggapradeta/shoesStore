const express = require('express')
const app = express()
const PORT = 5000
const bodyParser = require('body-parser')
const session = require('express-session') 

const isLogin = require('./middlewares/isLogin')
let sess = { secret:'mySecret'}

app.use(session(sess))
app.use((req,res,next)=>{
    app.locals.session = req.session
    next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public')); 

app.use('/', require('./routes/index'))
app.use('/login', require('./routes/login'))
app.use('/logout', require('./routes/logout'))
app.use('/signup', require('./routes/signup'))
app.use('/add_product', isLogin, require('./routes/add_product'))

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}...`)
})