const fs = require('fs')
const path = require('path')
const frasePreferida = `Gosto de volei e Musica Popular Brasileira`
const log = `Atenção, vou te amassar no volei`

try {
    const arquivo = path.resolve(__dirname, 'frase.md')
    fs.writeFileSync(arquivo, frasePreferida, 'utf-8')

    //Reescreve totalmente o conteudo
    fs.writeFileSync(arquivo, log, 'utf-8')
} catch (error) {
    console.log(error.message)
}