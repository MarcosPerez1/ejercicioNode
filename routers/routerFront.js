const express = require("express");
const router = express.Router();

const {getIndex,getServicios,getProductos, getInstalciones,}=require("../controllers/frontControllers")



router.get('/',getIndex)

router.get("/servicios",getServicios)

router.get("/productos",getProductos)

router.get("/instalaciones", getInstalciones)





module.exports = router