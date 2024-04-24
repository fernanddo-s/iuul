//funcções de validação aqui
class Validacao{
  validarHora(hora) {
    return /^((0[8-9]|1[0-8])([0-5][05])|19(00))$/.test(hora);
  }

  validarCPF(cpf) {
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
  
  formatoValido(data) {
    return /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(data);
  }
  
  idadeValida(dataStr) {
    let [dia, mes, ano] = dataStr.split("/");
    let data = new Date(ano, mes, dia);
    return calculaIdade(data) >= 13;
  }
  
  calculaIdade(data) {
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
  
  validarHora(hora) {
    return /^((0[8-9]|1[0-8])([0-5][05])|19(00))$/.test(hora);
  }
}

module.exports = Validacao;