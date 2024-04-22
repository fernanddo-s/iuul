import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: "postgres",
    storage: "localhost:5432:db-clinica"
})
