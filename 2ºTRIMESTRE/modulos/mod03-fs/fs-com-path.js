// importar path e fs
// path possui (join para juntar caminhos e resolve)
// para deduzir subdiretórios e S.O
const fs = require('fs');
const path = require('path');

//salvar o caminho como uma variável
// const caminho = path.join(__dirname, "README.md");//markdown, text
try{
const caminho = path.resolve(__dirname, "READE.md");//Abrir, ler, deletar, editar

const arquivo = fs.readFileSync(caminho, 'utf-8');
console.log(arquivo);

} catch(error){
    // console.log(error.errno);
       console.log('-------------------')
    console.warn("Atenção!"+error.path);
   throw new Error('Mensagem de erro personalizada');

   console.log('-------------------')
}


