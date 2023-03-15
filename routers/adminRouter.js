const express =require("express")
const router=express.Router()

const {crearNuevoServicio, mostrarNuevoServicio}=require ("../controllers/adminControllers")

router.get('/servicios/nuevo', crearNuevoServicio)

router.post('/servicios', mostrarNuevoServicio)


module.exports = router;