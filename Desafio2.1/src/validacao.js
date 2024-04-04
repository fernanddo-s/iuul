const { argv } = require('node:process');
const ReadFile = require('./ReadFile');
const WriteFile = require('./WriteFile');
const Validation = require('./Validation');

let rdfl = new ReadFile();
const data = rdfl.readFileWithPath(argv[2]);

const validation = new Validation();

validation.JSONValidation(data);

let wrfl = new WriteFile();

const erros = {
    campo: "nome do campo",
    mensagem: "menssagem de erro",
}
wrfl.writeFileWithErros(JSON.stringify(erros, null, 2))