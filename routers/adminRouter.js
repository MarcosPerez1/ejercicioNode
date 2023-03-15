const express =require("express")
const router=express.Router()

const {crearNuevoServicio, mostrarNuevoServicio}=require ("../controllers/adminControllers")

router.post('/servicios/nuevo', crearNuevoServicio)

router.get('/servicios', mostrarNuevoServicio)


module.exports = router;