let fs = require("fs");

class ReadFile {
  readFileWithPath(filePath) {
    fs.readFile(`${filePath}`, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      }
      const user = JSON.parse(data)
      console.log(user.nome)
      return user;
    });
  }
}
  
module.exports = ReadFile;

// const fs = require('fs');

// const dados = fs.readFileSync('arquivo.json', 'utf8');
// console.log(JSON.parse(dados));
