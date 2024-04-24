//Menu com persistêcnia no PostgreSQL

const db = require("../db/db.js");
const Paciente = require("../models/Paciente.js");
const Consulta = require("../models/Consulta.js");
const readlineSync = require("readline-sync");
const Validacao = require("../validation/Validacao.js");
const { where } = require("sequelize");

(async () => {
  await db.sync();
  while (true) {
    console.log("Menu Principal\n1-Cadastro de pacientes\n2-Agenda\n3-Fim");
    let op = readlineSync.question();
    let opMenuPaciente,
      opMenuAgenda,
      cpf,
      nome,
      dataNascimento,
      dataConsulta,
      horaInicial,
      horaFinal,
      paciente;
    switch (op) {
      case "1":
        console.log(
          "Menu do Cadastro de Pacientes\n1-Cadastrar novo paciente\n2-Excluir paciente\n3-Listar pacientes (ordenado por CPF)\n4-Listar pacientes (ordenado por nome)\n5-Voltar p/ menu principal"
        );
        opMenuPaciente = readlineSync.question();
        switch (opMenuPaciente) {
          case "1":
            cpf = readlineSync.question("CPF: ");
            //validar cpf
            while (!validarCPF(cpf)) {
              console.log(
                "CPF inválido, digite um CPF válido, por favor!(somente números)"
              );
              cpf = readlineSync.question("CPF: ");
            }
            nome = readlineSync.question("Nome: ");
            dataNascimento = readlineSync.question("Data de Nascimento: ");
            while (
              !formatoValido(dataNascimento) ||
              !idadeValida(dataNascimento)
            ) {
              if (!formatoValido(dataNascimento)) {
                console.log("A data deve estar no formato DD/MM/AAAA.");
              } else {
                console.log("A data deve ser pelo menos 13 anos atrás.");
              }
              dataNascimento = readlineSync.question("Data de Nascimento: ");
            }
            const [dia, mes, ano] = dataNascimento.split("/");
            const data = new Date(ano, mes, dia);

            paciente = await Paciente.create({
              cpf: cpf,
              nome: nome,
              dataNascimento: data,
            });
            console.log("Paciente cadastrado com sucesso!");
            break;
          case "2":
            // listagem de pacientes *FALTA ORDENAÇÃO
            cpf = readlineSync.question("CPF: ");
            paciente = await Paciente.findOne({ where: { cpf: cpf } });
            if(paciente != null){
              await paciente.destroy();
              console.log("Paciente excluído com seucesso!");
              break;
            }
            console.log("Paciente não encontrado");
            break;
          case "3":
            console.log(
              "----------------------------------------------------------"
            );
            console.log("CPF        Nome                Dt. Nasc.       Idade");
            console.log(
              "----------------------------------------------------------"
            );

            pacientes = await Paciente.findAll();
            console.log(pacientes);
            break;
          case "4":
            // listagem de pacientes ordenado por nome
            break;
          case "5":
            break;
          default:
            console.log("Escolha uma opção válida!");
            break;
        }
        break;
      case "2":
        console.log(
          "Agenda\n1-Agendar consulta\n2-Cancelar agendamento\n3-Listar agenda\n4-Voltar p/ menu principal"
        );
        opMenuAgenda = readlineSync.question();
        switch (opMenuAgenda) {
          case "1":
            cpf = readlineSync.question("CPF: ");
            dataConsulta = readlineSync.question("Data: ");
            while (!formatoValido(dataConsulta)) {
              console.log("A data deve estar no formato DD/MM/AAAA.");
              dataConsulta = readlineSync.question("Data da Consulta: ");
            }
            const [dia, mes, ano] = dataConsulta.split("/");
            const data = new Date(ano, mes, dia);
            horaInicial = readlineSync.question("Hora inicial: ");
            while (!validarHora(horaInicial)) {
              console.log("Hora inválida");
              horaInicial = readlineSync.question("Hora inicial: ");
            }
            horaFinal = readlineSync.question("Hora final: ");
            while (!validarHora(horaFinal)) {
              console.log("Hora inválida");
              horaFinal = readlineSync.question("Hora final: ");
            }
            const consulta = new Consulta(cpf, data, horaInicial, horaFinal);
            consultas.push(consulta);
            break;
          case "2":
            let cpf = readlineSync.question("CPF: ");
            for (let i = 0; i < consultas.length; i++) {
              if (cpf === consultas[i]._cpf) {
                consultas.splice(i, 1);
                console.log("Consulta excluída com sucesso!");
                break;
              }
            }
            console.log("Erro: não foi possível excluir a consulta");
            break;
          case "3":
            consultas.forEach((item) => {
              console.log(
                `${item.cpf} | ${item.data} | ${item.hora_inicial} | ${item.hora_final}`
              );
            });
            break;
          case "4":
            break;
          default:
            console.log("Escolha uma opção válida!");
            break;
        }
        break;
      case "3":
        return false;
      default:
        console.log("Escolha uma opção válida!");
        break;
    }
  }
})();

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

function formatoValido(data) {
  return /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(data);
}

function idadeValida(dataStr) {
  let [dia, mes, ano] = dataStr.split("/");
  let data = new Date(ano, mes, dia);
  return calculaIdade(data) >= 13;
}

function calculaIdade(data) {
  const hoje = new Date();
  let idade = hoje.getFullYear() - data.getFullYear();
  if (
    hoje.getMonth() < data.getMonth() ||
    (hoje.getMonth() === data.getMonth() && hoje.getDate() < data.getDate())
  ) {
    return idade - 1;
  }
  return idade;
}

function validarHora(hora) {
  return /^((0[8-9]|1[0-8])([0-5][05])|19(00))$/.test(hora);
}
