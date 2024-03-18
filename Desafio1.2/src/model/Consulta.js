class Consulta {
    constructor(paciente, data, hora_inicial, hora_final){
        this.cpf = paciente.cpf;
        this.data = data;
        this.hora_inicial = hora_inicial;
        this.hora_final = hora_final;
    }

    
}

module.exports = Consulta;