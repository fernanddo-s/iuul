const { argv } = require('node:process');
import {ReadFile} from './ReadFile';

// print process.argv
argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

console.log(argv[2])

ReadFile.readFile(argv[2]);


//alguma coisa.readFile(argv[2]);


// pergar o caminho do arquivo para ler ok
// chamar o modulo de leitura
//chamar modulo de validação dos dados
//validar
//escrever erros no arquivo
