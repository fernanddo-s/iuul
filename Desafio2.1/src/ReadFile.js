let fs = require("fs");

class ReadFile {
  readFileWithPath(filePath) {
    fs.readFile(`${filePath}`, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data.toString());
      return data;
    });
  }
}
  
module.exports = ReadFile;
// export default readFile;


// module.exports = ReadFile;
//../Desafio2.1/files/leitura.json
