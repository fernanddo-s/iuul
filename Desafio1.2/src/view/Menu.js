//Estrutura de interface com o usuario
//Mostrar valores, fazer perguntas, receber valores para usar como parametros

const Paciente = require("../model/Paciente.js");
const Consulta = require("../model/Consulta.js");
const Agenda = require("../model/Agenda.js");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(`cpf?`, (cpf) => {
  let cpf = cpf;
  console.log(`Hi ${cpf}!`);
  readline.close();
});

const paciente1 = new Paciente(cpf, "Luís Fernando", "25/04/2001");
const paciente2 = new Paciente("0000000000", "José Silva", "25/12/2010");

const consulta1 = new Consulta(paciente1, "19/03/2024", "0800", "0830");

const agenda = new Agenda();
agenda.marcarConsulta(paciente1, consulta1);

console.log(paciente1);
console.log(paciente2);

agenda.agenda.forEach((item, index) => {
  console.log(`Consulta ${index + 1}:`);
  console.log(`Paciente: ${item.paciente.nome}`);
  console.log(`Idade: ${item.paciente.cpf}`);
  console.log(`Data: ${item.consulta.data}`);
  console.log(`Motivo: ${item.consulta.hora_inicial}`);
  console.log("---------------------");
});
