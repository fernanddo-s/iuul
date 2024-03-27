let fs = require("fs");

var data = new Date();

fs.writeFile(`../Desafio2.1/files/escrita${data.getTime()}.txt`, "Teste de criação de arquivo e escrita",(err) => {
    if(err){
        throw err
    }
    console.log("Salvo!")
})