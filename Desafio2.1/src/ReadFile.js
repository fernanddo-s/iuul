let fs = require("fs");

class ReadFile {
  readFileWithPath(filePath) {
    fs.readFile(`${filePath}`, (err, data) => {
      if (err) {
        console.log(err);
      }
      return JSON.parse(data);
    });
  }
}
  
module.exports = ReadFile;

// const fs = require('fs');

// const dados = fs.readFileSync('arquivo.json', 'utf8');
// console.log(JSON.parse(dados));
