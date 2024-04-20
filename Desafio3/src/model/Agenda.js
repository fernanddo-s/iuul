class Agenda {
  constructor() {
    this.agenda = [];
  }

  marcarConsulta(paciente, consulta) {
    this.agenda.push({ paciente, consulta });
  }
}

export { Agenda };
