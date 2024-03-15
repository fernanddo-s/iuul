const readline = require("readline");

class Vertice {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  // Getter para x
  get x() {
    return this.#x;
  }

  // Getter para y
  get y() {
    return this.#y;
  }

  // Método para calcular a distância euclidiana entre dois vértices
  distancia(outroVertice) {
    const dx = this.#x - outroVertice.x;
    const dy = this.#y - outroVertice.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // Método para mover o vértice para outra posição (x, y)
  move(novoX, novoY) {
    this.#x = novoX;
    this.#y = novoY;
  }

  // Método para verificar se dois vértices são iguais
  equals(outroVertice) {
    return this.#x === outroVertice.x && this.#y === outroVertice.y;
  }
}

//fazer leitura de valores
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x = rl.question("digite um valor pra repetir:");
rl.close()
console.log(x)
