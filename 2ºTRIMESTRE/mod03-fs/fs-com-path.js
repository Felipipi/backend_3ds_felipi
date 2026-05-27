// importar path e fs
// path possui (join para juntar caminhos e resolve)
// para deduzir subdiretórios e S.O
const fs = require('fs');
const path = require('path');

//salvar o caminho como uma variável
// const caminho = path.join(__dirname, "README.md");//markdown, text


const caminho = path.resolve(__dirname, "README.md");//Abrir, ler, deletar, editar

const arquivo = fs.readFileSync(caminho, 'utf-8');
console.log(arquivo);

