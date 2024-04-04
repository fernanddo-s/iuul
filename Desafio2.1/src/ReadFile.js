let fs = require("fs");

class ReadFile {
  readFileWithPath(filePath) {
    try{
      const users = fs.readFileSync(`${filePath}`, "utf-8");
      return JSON.parse(users);
    }catch(e){
      console.log(e)
    }
  }
}

module.exports = ReadFile;
