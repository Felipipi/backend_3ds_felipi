// Template (modelo) string ou template literal (literal de modelo) é uma forma de criar strings em JavaScript que permite a interpolação de expressões e a criação de strings multilinha de maneira mais fácil e legível. Ele é delimitado por crases (``) em vez de aspas simples ('') ou aspas duplas ("").
// São textos que processam informações
// De natureza distintas numa mesma sentença, ou seja, é possível misturar texto e expressões
// Exemplo de template string simples:`Minha mãe é ${nomeDaMae}`
// Exemplo de template string com interpolação de expressões:
const nome = "João";
const sobreNome = "Pedro";
const idade = 35;
const mensagem = `Olá, meu nome é ${nome} ${sobreNome} e eu tenho ${idade} anos.`;
console.log(mensagem);