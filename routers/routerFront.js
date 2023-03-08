const express = require("express");
const router = express.Router();

const {getIndex,getServicios,getQuienes,getContacto,getProductos}=require("../controllers/frontControllers")



router.get('/',getIndex)

router.get("/servicios",getServicios)

router.get("/productos",getProductos)

router.get("/quienesomos",getQuienes)

router.get("/contacto",getContacto)



module.exports = router