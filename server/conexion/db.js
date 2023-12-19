const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/alumnos'

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=> {
    console.log(`Conexion a mongo con exito`)
}).catch ( (error)=> {
    console.log(`Error al conectarse a mongo`, error)
})


module.exports = mongoose