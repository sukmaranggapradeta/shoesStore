function isAdmin (req,res,next){
    if(req.session.role === 'admin'){
        next()
    }else
    {
        res.redirect(`./login?error=please login as admin`)
    }
}

module.exports = isAdmin