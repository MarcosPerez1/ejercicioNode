const { validationResult } = require("express-validator")
const validarImputs = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errores: errors.mapped() //te mete el error dentro de la insta
        })
    }
    next()
}

module.exports = {
    validarImputs,
}