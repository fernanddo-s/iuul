(async () => {

    const db = require('./db/db');
    const Paciente = require('./models/Paciente');
    await db.sync();

    const novoPaciente = await Paciente.create({
        cpf: "08228186398",
        nome: "Luis Fernando",
        dataNascimento: "2001-04-25"
    })
})();