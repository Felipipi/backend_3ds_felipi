// importar path e fs
// path possui (join para juntar caminhos e resolve)
// para deduzir subdiretórios e S.O
const fs = require('fs');
const path = require('path');
const chalk = require('chalk').default

//salvar o caminho como uma variável
// const caminho = path.join(__dirname, "README.md");//markdown, text
try{
const caminho = path.resolve(__dirname, "README.md");//Abrir, ler, deletar, editar

const arquivo = fs.readFileSync(caminho, 'utf-8');
console.log(chalk.green('Arquivo carregado com sucesso!'))
console.log(arquivo);

} catch(error){
    // console.log(error.errno);
       console.log(chalk.yellow('Falha ao carregar o arquivo. Tente novamente mais tarde'))

   console.log(chalk.red('Erro interno de leitura de arquivo \n'), chalk.white(error.message))
}


