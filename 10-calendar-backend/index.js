const express = require('express');
require('dotenv').config();


/// Crear el seervidor de express
const app = express();


//Directorio publico
app.use( express.static('public') );

//lectura y parsseo del body
app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'));
//TODO CRUD // crear, eminar , eetc..




//escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriedo puesto ${process.env.PORT}`);
})