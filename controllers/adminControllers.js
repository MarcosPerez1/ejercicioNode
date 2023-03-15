const { consulta } = require("../helpers/fetch")

const mostrarNuevoServicio = (req,res) =>{
    res.render("admin/vistaNuevoServicio",{
        titulo:"Crear nuevo servicio"
    })
}

const crearNuevoServicio =async (req,res) =>{

    try {
        const {titulo,descripcion}=req.body
        const body={
            titulo,
            descripcion
        }
    
    consulta("servicios","post",body)
    res.redirect("admin/servicios/nuevo")

    } catch (error) {
        res.status(500).json({
            ok: falsa,
            msg: 'el servicio no pudo ser creado'
    })
    }
}

module.exports={
    mostrarNuevoServicio,
    crearNuevoServicio
}