const express = require('express');
const router = express.Router();
const { check } = require("express-validator")


const { validarImputs } = require("../middlewares/validarImputs")

const { getServicios, getServicio, crearServicios, actualizarServicio, eliminarServicio } = require('../controllers/apiControllers.js')

// recoger todos los servicios

router.get('/', getServicios)

// recoger un servicio
router.get('/:id', getServicio)


// crear un servicio
router.post('/', [
    check("titulo", "El titulo del servicio es obligatorio").not().isEmpty(),
    check("descripcion", "la descripcion es obligatoria").not().isEmpty(),
    validarImputs
], crearServicios)

// actualizar un servicio
router.put('/:id', actualizarServicio)

// eliminar un servicio
router.delete('/:id', eliminarServicio)




module.exports = router;