const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Paciente = db.define("paciente", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: 'conpositeIndex'
  },
  nome: Sequelize.STRING,
  dataNascimento: Sequelize.DATE,
});

module.exports = Paciente;