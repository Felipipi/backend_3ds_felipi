const frutas = ['jaca', 'manga', 'abacaxi']
console.log(frutas)
frutas.push('pera')
console.log(frutas.length)
while (frutas.length > 0) {
    frutas.pop()
    if (frutas.length == 0) {
        console.log("Não há frutas para vender!!")
    }
}
console.log(frutas)
console.log(frutas.length)