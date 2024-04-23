const { DataTypes, Model, Sequelize } = require("sequelize");

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "db.sqlite",
// });

//colocar isso exportado em algum lugar e pegar em cada classe
const sequelize = new Sequelize('db-clinica', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
      },
      { sequelize, modelName: "cliente", tableName: "clientes" }
    );
  }
}

Cliente.init(sequelize);


// async function f1(){
//   await sequelize.sync({ force: true });

//   const cliente1 = await Cliente.create({ nome: "Fernando" });
// }

// f1()

(async () => {
  // await sequelize.sync({ force: true });

  const cliente1 = await Cliente.build({ nome: "Fernando" });
  await cliente1.save();

  const cliente2 = await Cliente.create({ nome: "Andre" });
  const cliente3 = await Cliente.create({ nome: "Adriano" });
  const cliente4 = await Cliente.create({ nome: "Regina" });
})();
