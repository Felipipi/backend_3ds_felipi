//objetos são estrututras do tipo chave-valor, onde cada chave tem um valor associado a ela.
//podemos atribuir de forma dinâmica, ou seja, pode criar um objeto vazio e depois ir atribuindo valores a ele.
//objetos tem índices nomeados, ou seja, cada chave tem um nome associado a ela, diferente dos arrays que tem índices numéricos.
//objetos são muito utilizados para representar entidades do mundo real, como pessoas, carros, etc.
//podemos usar "for of" ou "for in" para percorrer os objetos, mas o "for in" é mais recomendado para objetos
//ele percorre as chaves do objeto, enquanto o "for of" percorre os valores do objeto, o que pode ser confuso.
const carros = {
    nome: "Camaro",
    modelo: "xpto Cam",
    cores: ["amarelo", "preto"],
    cidades: {}

}
carros.modelo = "Fusca"
carros["nome"] = "Chev"
carros.montadora = "Chevrolet"
    console.log(carros.modelo)
    console.log(carros.nome)
    console.log(carros.montadora)
