const { Schema, model } = require("mongoose")

const InstalacionesSchema = new Schema({
    tipo:{
        type: String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    }
})

module.exports = model("Instalaciones", InstalacionesSchema)