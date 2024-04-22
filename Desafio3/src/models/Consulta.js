class Consulta {
  #cpf;
  #data;
  #horaInicial;
  #horaFinal;
  constructor(cpf, data, horaInicial, horaFinal) {
    this.#cpf = cpf;
    this.#data = data;
    this.#horaInicial = horaInicial;
    this.#horaFinal = horaFinal;
  }
}

export { Consulta };