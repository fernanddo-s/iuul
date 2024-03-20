//Estrutura de interface com o usuario
//Mostrar valores, fazer perguntas, receber valores para usar como parametros

const Paciente = require("../model/Paciente.js");
const Consulta = require("../model/Consulta.js");
const Agenda = require("../model/Agenda.js");
var readlineSync = require("readline-sync");

let pacientes = [];

while (true) {
  //printar menu inicial e colocar as opções
  console.log("Menu Principal\n1-Cadastro de pacientes\n2-Agenda\n3-Fim");
  let op = readlineSync.question();
  switch (op) {
    case "1":
      console.log(
        "Menu do Cadastro de Pacientes\n1-Cadastrar novo paciente\n2-Excluir paciente\n3-Listar pacientes (ordenado por CPF)\n4-Listar pacientes (ordenado por nome)\n5-Voltar p/ menu principal"
      );
      let op_menu_paciente = readlineSync.question();
      switch (op_menu_paciente) {
        case "1":
          let cpf = readlineSync.question("CPF: ");
          //validar cpf
          while (!validarCPF(cpf)) {
            console.log("CPF inválido, digite um CPF válido, por favor!(somente números)");
            cpf = readlineSync.question("CPF: ");
          }
          let nome = readlineSync.question("Nome: ");
          let data_nascimento = readlineSync.question("Data de Nascimento: ");
          const paciente = new Paciente(cpf, nome, data_nascimento);
          //validar data de nascimento
          pacientes.push(paciente);
          console.log("Paciente cadastrado com sucesso!");
          break;
        case "2":
          let cpf_exclusao = readlineSync.question("CPF: ");
          for (let i = 0; i < pacientes.length; i++) {
            if (cpf_exclusao === pacientes[i]._cpf) {
              pacientes.splice(i, 1);
              console.log("Paciente excluído com sucesso!");
              break;
            }
          }
          console.log("Erro: paciente não cadastrado");
          break;
        case "3":
          console.log(
            "----------------------------------------------------------"
          );
          console.log("CPF        Nome                Dt. Nasc.       Idade");
          console.log(
            "----------------------------------------------------------"
          );
          pacientes.forEach((item) => {
            console.log(
              `${item.cpf}        ${item.nome}                ${item.data_nascimento}       ${item.data_nascimento}`
            );
          });
          break;
        case "4":
          pacientes.forEach((item, index) => {
            console.log(`Consulta ${index + 1}:`);
            console.log(`Paciente: ${item.nome}`);
            console.log(`Idade: ${item.cpf}`);
            console.log(`Data: ${item.data_nascimento}`);
            console.log("---------------------");
          });
          break;
        case "5":
          break;
        default:
          console.log("Escolha uma opção válida!");
          break;
      }
      break;
    case "2":
      console.log("Agenda");
      //aqui vai o codigo de Agenda
      //menu de agendamento ou voltar para o menu inicial
      //agendar consulta
      //cancelar agendamento
      //listar agendamentos
      break;
    case "3":
      console.log("Fim do programa");
      return false;
  }
}

// const paciente2 = new Paciente("0000000000", "José Silva", "25/12/2010");

// const consulta1 = new Consulta(paciente1, "19/03/2024", "0800", "0830");

// const agenda = new Agenda();
// agenda.marcarConsulta(paciente1, consulta1);

// console.log(paciente1);
// console.log(paciente2);

// agenda.agenda.forEach((item, index) => {
//   console.log(`Consulta ${index + 1}:`);
//   console.log(`Paciente: ${item.paciente.nome}`);
//   console.log(`Idade: ${item.paciente.cpf}`);
//   console.log(`Data: ${item.consulta.data}`);
//   console.log(`Motivo: ${item.consulta.hora_inicial}`);
//   console.log("---------------------");
// });

function validarCPF(cpf) {

  if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false; // Verifica se o CPF tem 11 dígitos e não é uma sequência repetida

  // Calcula o primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  let digit = remainder > 9 ? 0 : remainder;

  if (parseInt(cpf.charAt(9)) !== digit) return false; // Verifica se o primeiro dígito verificador está correto

  // Calcula o segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = 11 - (sum % 11);
  digit = remainder > 9 ? 0 : remainder;

  if (parseInt(cpf.charAt(10)) !== digit) return false; // Verifica se o segundo dígito verificador está correto

  return true; // CPF válido
}