const jwt=require('jsonwebtoken')

const validarJWT=(req,res,next)=>{
    const token= req.header('x-token')

    if(!token){
        return  res.status(401).json({
            ok:false,
            msg:"no hay token en la peticion",
        })
    }
    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET_KEY)

        req.uid=payload.uid
        req.name=payload.name

    } catch(error){
        return res.status(500).json({
            ok:false,
            msg:"token no valido"
        })
    }


    next()
}
module.exports={
    validarJWT
}
