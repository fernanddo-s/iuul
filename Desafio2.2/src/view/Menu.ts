//fazer interface de menu aqui
//recebe entrada de dados do usuario e passa para o controller

import rl from 'readline-sync';

class Menu{
    printMenu(){
        let moedaOrigem = rl.question("Moeda de origem: (no formato YYY, ex: BRL, USD)\n");
        let moedaDestino = rl.question("Moeda de destino: (no formato YYY, ex: BRL, USD)\n");
        let valorParaConverter = rl.question("Valor para ser convertido:\n");
        //retornar todos os valores
    }
}

export default Menu;