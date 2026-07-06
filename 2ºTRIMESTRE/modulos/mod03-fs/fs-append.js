const fs = require('fs')
const path = require('path')
const frasePreferida = `Cuidado, vou te amassar no volei\n`
const log = `Cuidado, vou te amassar no volei\n`

try {
    const arquivo = path.resolve(__dirname, 'frase.md')
    fs.writeFileSync(arquivo, frasePreferida, 'utf-8')

    //Reescreve totalmente o conteudo
    fs.writeFileSync(arquivo, log, 'utf-8')
} catch (error) {
    console.log(error.message)
}