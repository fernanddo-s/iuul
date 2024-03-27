const { argv } = require('node:process');
const ReadFile = require('./ReadFile');
const WriteFile = require('./WriteFile');

let rdfl = new ReadFile();
let data = rdfl.readFileWithPath(argv[2]);

let wrfl = new WriteFile();
wrfl.writeFileWithErros("teste")

//executa o arquivo validação
//ele chama o leitor
//pega os dados do arquivo
//chama a classe de Validação
//executa a validação
//chama a classe de escrita
//escreve o que precisa ser escrito
//fim do programa

// pergar o caminho do arquivo para ler ok
// chamar o modulo de leitura
//chamar modulo de validação dos dados
//validar
//escrever erros no arquivo
