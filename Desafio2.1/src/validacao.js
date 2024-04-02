const { argv } = require('node:process');
const ReadFile = require('./ReadFile');
const WriteFile = require('./WriteFile');

let rdfl = new ReadFile();
let data = rdfl.readFileWithPath(argv[2]);//melhorar o nome da variável
console.log(rdfl.readFileWithPath(argv[2]))

//alguma coisa.validacao(data)
//retorna os erros caso tenha e eles vão ser escritos

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
