// fazer a relação entre consulta e paciente
// conjunto de chave valor, onde uma chave é o cpf do paciente e o valor é um objeto consulta

class Agenda {
  constructor() {
    this.agenda = [];
  }

  //agendar receber um paciente e uma consulta
  marcarConsulta(paciente, consulta) {
    this.agenda.push({ paciente, consulta });
  }
}
module.exports = Agenda;
