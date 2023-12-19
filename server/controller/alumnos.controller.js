const alumnosService  = require('../services/alumnos.services')

const obtenerTodos = async(req, res) =>{  
    console.log('Pasando por el controlador de obtenerTodos()')
    try {
        res.status(200).json(await alumnosService.findAll())
    } catch (err) {
        res.status(500).json(err)
    }
}

const guardarAlumno = async (req, res) => {
        console.log('Pasando por el controlador de guardarAlumno()')

    try {
        res.status(201).json(await alumnosService.save(req.body))
    } catch (err) {
        res.status(500).json(err)
    }
}

const obtenerDni = async (req, res) => {
      console.log('Pasando por el controlador de obtenerxDNI()')

    try {
        const alumno = await alumnosService.getAlumnoByDni(req.params.dni)
        if (alumno)
            res.status(200).json(alumno )
        else
            res.status(404).json({mensaje: `${req.params.dni} no se encuentra registrado`})
    } catch (err ) {
        res.status(500).json(err)
    }            
}

const eliminar = async (req, res) => {
      console.log('Pasando por el controlador de eliminarAlumno()')
    try {
        res.status(200).json({
            mensaje:`${req.params.dni} fue borrado con exito`, 
            alumno: await alumnosService.deleteAlumnoByDni(req.params.dni)
        })
    } catch (err) {
        res.status(500).json(err) 
    }
}


module.exports = { 
  obtenerTodos,
  obtenerDni,
  guardarAlumno,
  eliminar
}