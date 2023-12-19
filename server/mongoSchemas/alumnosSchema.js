const mongoose = require('../conexion/db')

const alumnoSchema = mongoose.Schema({
    id: {type: Number, required:true},
    nombre: {type: String, required: true},
    dni: { type: Number, required: true},
    libreta: {type: Boolean, default: false}
},{collection: "alum"})


module.exports = mongoose.model('Alumno', alumnoSchema)