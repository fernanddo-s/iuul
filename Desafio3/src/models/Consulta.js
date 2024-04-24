const Sequelize = require("sequelize");
const db = require("../db/db.js");
const Paciente = require("./Paciente.js");

const Consulta = db.define("consulta", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  data: Sequelize.DATE,
  horaInicial: Sequelize.STRING,
  horaFinal: Sequelize.STRING,
});

Consulta.belongsTo(Paciente, {
  constraint: true,
  foreignKey: "idPaciente"
})

Paciente.hasMany(Consulta, {
  foreignKey: "idPaciente"
})

module.exports = Consulta;