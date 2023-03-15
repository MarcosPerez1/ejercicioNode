const { body } = require("express-validator")

const urlConsulta="https://proyecto-node.onrender.com/servicios"

const consulta=(url,method,body={})=>{
    let opciones ={};

    if(method =="post" || method=="put"){
        const {titulo,descripcion}=body
        opciones={
            method:method,
            body:{
                titulo,
                descripcion
            },
            headers:{
                "Content-Type":"application(json"
            }
        }
    }

    const respuesta = fetch(`${urlConsulta}/`,opciones)
}
module.exports={
    consulta
}