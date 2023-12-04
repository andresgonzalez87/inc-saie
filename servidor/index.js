const express = require('express');
const conectDB = require('./config/db');
const cors = require('cors');

//creamos el servidor
const app = express();

//conectamos a la base de datos
conectDB();
app.use(cors())

app.use(express.json());

app.use('/api/pacientes', require('./routes/patient'))



//para q app escuche por el puerto 4000
app.listen(4000, () => {
    console.log('el servidor esta corriendo')
})