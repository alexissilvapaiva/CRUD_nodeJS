const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1/alumnos'

mongoose.connect(MONGO_URL, { 
  useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=> {
    console.log(`Conexion a mongo con exito`)
}).catch ( (error)=> {
    console.log(`Error al conectarse a mongo`, error)
})


module.exports = mongoose