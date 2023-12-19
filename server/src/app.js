const express = require('express')
const app = express()
const {alumnosRouter} = require('../routes/alumnos.route')
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/api/alumnos', alumnosRouter)

app.listen(PORT, () => {console.log('Puerto : ' + PORT)})