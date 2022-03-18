const {Sequelize, DataTypes, Op} = require ("sequelize");
const express = require ("express");

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = require('./config/db');

//Cada que veas una URL relacionada con la version 1, ir hacia routes
app.use('/v1', require('./routes'))

//const PORT = 4001;
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

  try {
    sequelize.authenticate();
    console.log('La conexion fue exitosa');
  } 
  catch (error) {
    console.error('Hubo un problema con la conexión', error);
  }

