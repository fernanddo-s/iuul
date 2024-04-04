const moment = require("moment");
class Validation {
  JSONValidation(users) {
    for (let i = 0; i < users.length; i++) {
      validarNome(users[i].nome);
      validarCPF(users[i].cpf);
      // validarDataNascimento();
      validarRendaMensal(users[i].renda_mensal);
      validarEstadoCivil(users[i].estado_civil);
    }
  }
}

module.exports = Validation;

// validar nome
function validarNome(nome) {
  if (nome.length < 5 || nome.length > 60) return false;

  return true;
}

// validar cpf
function validarCPF(cpf) {
  if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  let digit = remainder > 9 ? 0 : remainder;

  if (parseInt(cpf.charAt(9)) !== digit) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = 11 - (sum % 11);
  digit = remainder > 9 ? 0 : remainder;

  if (parseInt(cpf.charAt(10)) !== digit) return false;

  return true;
}

// validar data de nascimento
function validarDataNascimento(dt_nascimento) {
  //recebe uma string do tipo "dt_nascimento": "14091966"
  //validar formato
  //validar idade (18 anos ou mais)

}

function formatoValido(data) {
  return /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(data);
}

function idadeValida(dataStr) {
  let [dia, mes, ano] = dataStr.split("/");
  let data = new Date(ano, mes, dia);
  return calculaIdade(data) >= 18;
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

function validarData(dt_nascimento) {
  if (dt_nascimento.length !== 8) {
    return null;
  }
  const data = moment(dt_nascimento, "YYYYMMDD");

  if (data.isValid()) {
    return data.format('YYYY-MM-DD');
  } else {
    return null;
  }
}

// validar renda mensal
function validarRendaMensal(renda) {
  if (/^\d+(,\d{2})?$/.test(renda)) {
    return true;
  } else {
    return false;
  }
}

// validar estado civil
function validarEstadoCivil(estadoCivil) {
  estadoCivil = estadoCivil.toUpperCase();
  if (
    estadoCivil === "C" ||
    estadoCivil === "S" ||
    estadoCivil === "V" ||
    estadoCivil === "D"
  )
    return true;
  return false;
}
