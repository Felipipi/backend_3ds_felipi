//tempo de cozimento de um ovo
const ovoSeis = {
    tipo: ["ovo caipira", "ovo branco"],
    tempoCozimento: 6,
    estado: "gema mole",
    galinheiro: {}

}
const ovoDez = {
    tipo: ["ovo caipira", "ovo branco"],
    tempoCozimento: 10,
    estado: "gema dura",
    galinheiro: {}
}
const ovoQuinze = {
    tipo: ["ovo caipira", "ovo branco"],
    tempoCozimento: 15,
    estado: "gema cinza",
    galinheiro: {}
}
console.log("estado da gema de " + ovoSeis.tempoCozimento + " minutos é: ")
console.log(ovoSeis.estado)

console.log("estado da gema de " + ovoDez.tempoCozimento + " minutos é:")
console.log(ovoDez.estado)

console.log("estado da gema de " + ovoQuinze.tempoCozimento + " minutos é:")
console.log(ovoQuinze.estado)



