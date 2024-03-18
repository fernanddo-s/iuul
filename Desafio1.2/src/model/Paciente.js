class Paciente {
  constructor(cpf, nome, data_nascimento) {
    this.cpf = cpf;
    this.nome = nome;
    this.data_nascimento = data_nascimento;
  }

  get cpf() {
    return this._cpf;
  }

  set cpf(cpf) {
    this._cpf = cpf;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  get data_nascimento() {
    return this._data_nascimento;
  }

  set data_nascimento(data_nascimento) {
    this._data_nascimento = data_nascimento;
  }
}

module.exports = Paciente;
