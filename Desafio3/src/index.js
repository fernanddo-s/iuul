(async () => {

    const db = require('./db/db');
    const Paciente = require('./models/Paciente');
    const Consulta = require('./models/Consulta');
    await db.sync();

    // const novoPaciente = await Paciente.create({
    //     cpf: "08228186398",
    //     nome: "Luis Fernando",
    //     dataNascimento: "2001-04-25"
    // })

    // const novaConsulta = await Consulta.create({
    //     data: "2024-04-27",
    //     horaInicial: "1000",
    //     horaFinal: "1030",
    //     idPaciente: novoPaciente.id
    // })

    const paciente = await Paciente.findByPk(1, { include: Consulta });
    // const consultas = await paciente.getConsultas();
    console.log(paciente.consulta);
})();