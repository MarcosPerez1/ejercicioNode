const { Schema, model } = require("mongoose")

const ServicioSchema = new Schema({
    servicio: String,
    descripcion: String,
})

module.exports = model("Servicios", ServicioSchema)