const Alumno = require('../mongoSchemas/alumnosSchema')

const findAll =  async ()=> {
    return await Alumno.find({})
}

const save = async (alumnoData) => {
    const alumno = new Alumno(alumnoData)
    return await alumno.save()
} 

const getAlumnoByDni = async (dniValue) =>{
    return await Alumno.findOne( {dni:dniValue})
}

const deleteAlumnoByDni = async (dniValue) => {
    return await Alumno.deleteOne({dni:dniValue})
}


module.exports = {findAll, save, getAlumnoByDni, deleteAlumnoByDni }