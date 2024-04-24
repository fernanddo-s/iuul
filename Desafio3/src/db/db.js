const Sequelize = require("sequelize");

const sequelize = new Sequelize('db-clinica', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;