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
console.log(GAY);

} catch(error){
    // console.log(error.errno);
       console.log('Falha ao carregar o arquivo. Tente novamente mais tarde')

   console.log('Erro interno de leitura de arquivo \n', error.message)
}


