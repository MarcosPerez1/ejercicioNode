const Servicios= require("../models/servicioModel.js");
const Instalaciones= require("../models/instalacionesModel.js");
const puppeteer = require ("puppeteer");


const getIndex= (req, res) => {
    res.render("index", {

    })
}

 
const getProductos= (req, res) => {
    res.render("productos", {
        titulo: "Productos",
        msg: "este es el apartados de productos de nuestra empresa"
    })
}




const getServicios=async(req,res)=>{
    
    try{
        const servicios= await Servicios.find()

        res.render("servicios",{
           servicios
        })
    } catch(error){
        console.log(error)
    }
}

const getInstalciones=async(req,res)=>{

    try{
        const instalacionesOk = await Instalaciones.find()
        console.log(instalacionesOk)
        
        res.render("instalaciones",{
            instalacionesOk
        })
    } catch(error){
        console.log(error)
    }
}



module.exports={
    getIndex,
    getServicios,
    getProductos,
    getInstalciones,
    // searchGoogle,
}