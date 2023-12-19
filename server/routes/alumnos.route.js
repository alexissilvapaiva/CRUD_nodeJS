const express = require('express')
const alumnoController = require('../controller/alumnos.controller')
const router = express.Router()

router.get('/', alumnoController.obtenerTodos)
router.get('/:dni', alumnoController.obtenerDni)
router.post('/',alumnoController.guardarAlumno)
router.delete('/:dni', alumnoController.eliminar)

module.exports = { alumnosRouter: router }