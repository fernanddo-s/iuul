const { argv } = require('node:process');
const ReadFile = require('./ReadFile');
const WriteFile = require('./WriteFile');
const Validation = require('./Validation');

let rdfl = new ReadFile();
const data = rdfl.readFileWithPath(argv[2]);

const validation = new Validation();

validation.JSONValidation(data);


let wrfl = new WriteFile();
wrfl.writeFileWithErros("teste")

//executa o arquivo validação ok
//ele chama o leitor ok
//pega os dados do arquivo ok
//chama a classe de Validação
//executa a validação
//chama a classe de escrita ok
//escreve o que precisa ser escrito
//fim do programa
