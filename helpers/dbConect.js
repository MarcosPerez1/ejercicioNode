const mongoose=require("mongoose")

// Mongoose es una librería para Node.js que nos permite escribir consultas para 
// una base de datos de MongoDB, con características como validaciones, construcción
//  de queries, middlewares, conversión de tipos y algunas otras, que enriquecen
//   la funcionalidad de la base de datos.

const conexion=async () =>{
    
    try{
        const respuesta=await mongoose.connect(process.env.URI_CONNECT)
        console.log("conectado a la base de datos")
        return respuesta
    }catch(error){
        return{
            ok:false,
            msg:"error con la conexion",
            error
        }
    }

 }


 module.exports={
    conexion,
 }