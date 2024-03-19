//Estrutura de interface com o usuario
//Mostrar valores, fazer perguntas, receber valores para usar como parametros

const Paciente = require("../model/Paciente.js");
const Consulta = require("../model/Consulta.js");
const Agenda = require("../model/Agenda.js");
var readlineSync = require("readline-sync");

let cpf = readlineSync.question("cpf");
let nome = readlineSync.question("nome");
let data_nascimento = readlineSync.question("data_nascimento");

const paciente1 = new Paciente(cpf, nome, data_nascimento);
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

console.log("Menu Principal\n1-Cadastro de pacientes\n2-Agenda\n3-Fim");
let op = readlineSync.question();
switch (op) {
  case "1":
    console.log("cadastrando paciente");
  case "2":
    console.log("Agenda");
  case "3":
    console.log("Fim do programa");
}
