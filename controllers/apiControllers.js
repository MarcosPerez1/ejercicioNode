//https://mongoosejs.com/docs/api/query.html

const Servicio = require('../models/servicioModel')

// recoger todos los servicios
const getServicios = async (req, res) => {

    try {
        const servicios = await Servicio.find()
        console.log(servicios)
        return res.status(200).json({
            ok: true,
            msg: 'Los servicios han sido recibidos con exito',
            data: servicios
        })
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'La base de datos no nos esta proporcionando los datos'
        });
    }


}

// recoger un servicio
const getServicio = async (req, res) => {
    const nuevoServicio = new Servicio(req.body)

    try {
        const nuevoServicioData = await nuevoServicio.save()
        const id = req.params.id;
        const servicio = await Servicio.findById(id);
        return res.status(200).json({
            ok: true,
            msg: 'este es el servicio que nos ha solicitado',
            data: servicio
        })
    } catch (error) {
        return res.status.json(500).json({
            ok: false,
            msg: "el servicio no existe",
        })
    }
}

// crear un servicio
const crearServicios = async (req, res) => {
    try {
        const NewServicio = new Servicio(req.body);
        const newData = await NewServicio.save();

        return res.status(201).json({
            ok: true,
            msg: "servicio ha siso creado con exito",
            data: newData
        })
    } catch (error) {
        res.status(500).json({
            ok: falsa,
            msg: 'el servicio no pudo ser creado'
        })
    }
}


// actualizar un servicio
const actualizarServicio = async (req, res) => {

    try {
        const id = req.params.id;
        const titulo = req.body.titulo;
        const descripcion = req.body.descripcion;
        const upServicio= await Servicio.findByIdAndUpdate({_id:id},{$set:{titulo,descripcion}},{new:true});

        return res.status(200).son({
            ok: true,
            msg: "el servicio se ha actualizado",
            data: upServicio
        });
    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'el servicio no se ha podido ser actualizado'
        })
    }
}


// eliminar un servicio
const eliminarServicio = async (req, res) => {
    try {
        const id = req.params.id;
        await Servicio.findByIdAndDelete({ _id: id });
        return res.status(200).json({
            ok: true,
            msg: "el servicio ha sido eliminado"
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Eliminando un servicio ha fallado'
        })
    }
}


module.exports = {
    getServicios,
    getServicio,
    crearServicios,
    actualizarServicio,
    eliminarServicio
}