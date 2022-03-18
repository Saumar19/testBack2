const Sequelize = require ("sequelize");

const sequelize = new Sequelize( //Conexion a la base de datos
process.env.DATABASE,
process.env.USERDB, 
process.env.PASSWORD,
{
    host: process.env.HOST,
    dialect: 'postgres',
    native: true,
    ssl: true
  });

  module.exports = sequelize;
