const { Schema, model } = require('mongoose')

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: string,
        required: true
    }
})


module.exports = model('Usuario', UsuarioSchema)