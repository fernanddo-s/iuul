//funcções de validação aqui
class Validacao{
  validarHora(hora) {
    return /^((0[8-9]|1[0-8])([0-5][05])|19(00))$/.test(hora);
  }
}

module.exports = Validacao;