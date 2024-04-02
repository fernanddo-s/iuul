let fs = require("fs");

function formatarData(data) {
  const dia = ("0" + data.getDate()).slice(-2);
  const mes = ("0" + (data.getMonth() + 1)).slice(-2);
  const ano = data.getFullYear();
  const hora = ("0" + data.getHours()).slice(-2);
  const minuto = ("0" + data.getMinutes()).slice(-2);
  const segundo = ("0" + data.getSeconds()).slice(-2);

  return dia + mes + ano + "-" + hora + minuto + segundo;
}
class WriteFile {
  writeFileWithErros(erro) {
    let data = new Date();
    const dataFormatada = formatarData(data);
    fs.writeFile(
      `./files/erros-${dataFormatada}.json`,
      erro,
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  }
}

module.exports = WriteFile;
