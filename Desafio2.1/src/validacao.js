const { argv } = require('node:process');
const ReadFile = require('./ReadFile');
const WriteFile = require('./WriteFile');

let rdfl = new ReadFile();
const data = rdfl.readFileWithPath(argv[2]);//melhorar o nome da variável
console.log(argv[2])
console.log(typeof data)


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
