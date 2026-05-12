const mod_calc = require("./mod_calc")
let health = 100
function danoJogador(arma, dano) {
    if(health <= 0) {
        console.log('Jogador já está morto')
    }
 else {
    const danoTotal = health - dano
    return `${arma} causa dano ${dano} -> ${danoTotal}`
}
}

module.exports = {
    danoJogador
}