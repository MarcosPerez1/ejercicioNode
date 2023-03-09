const express = require("express");
const router = express.Router();

const {getIndex,getServicios,getProductos}=require("../controllers/frontControllers")



router.get('/',getIndex)

router.get("/servicios",getServicios)

router.get("/productos",getProductos)





module.exports = router