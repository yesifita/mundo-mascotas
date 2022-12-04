module.exports= (req,res,next)=>{
    if (!req.session.usuario) {
        res.status(400).json({msg:"sesion no iniciada"})
    } else {
        next();
    }
}