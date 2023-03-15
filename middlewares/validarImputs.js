const {validationResult}=require("express-validator")
const validarImputs=()=>{
    const errors=validationResult(req,res,next);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errores:errors.mapped()
        })
    }
    next()
}

module.exports={
    validarImputs,
}