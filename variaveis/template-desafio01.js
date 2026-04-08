// Crie um perfil profissional usando template string.
// Interpole uma frase é um objeto com
// As características de um profissional de sua escolha

// Criar objeto profissional

// Criar variável com interpolação (template)

// Imprimir perfilProfissional 

const profissional = {
    nome: "Felipi",
    profissão: "Desenvolvedor Backend",
    experiência: "3 anos",
    habilidades: ["JavaScript ", "Node.js ", "React "]
}

const perfilProfissional =
`\nOlá, meu nome é ${profissional.nome} \neu sou um ${profissional.profissão} \ncom ${profissional.experiência} de experiência. \nMinhas habilidades incluem ${profissional.habilidades}`;

 console.log(perfilProfissional);