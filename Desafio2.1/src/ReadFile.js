let fs = require("fs");

  function readFile(filePath) {
    fs.readFile(`${filePath}`, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data.toString());
    });
  }

export default readFile;


// module.exports = ReadFile;
//../Desafio2.1/files/leitura.json
