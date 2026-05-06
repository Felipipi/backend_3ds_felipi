// Funções de retorno exigem a
// cláusula/termo 'return'
//isso permite fazer operções sequenciais com o resultado
//armazenar funções em variáveis
// Exemplo de função com return

function sobraDoSalario(meuSalario){
    const aluguel = 1500;
    const contaDeLuz = 150;
    const resto = meuSalario - (aluguel + contaDeLuz);
    return `O que sobrou do meu salário foi R$ ${resto.toFixed(2).replace('.', ',')}`;
}
const minhasSobras = sobraDoSalario(1700.00);
console.log(sobraDoSalario(25000.00));
console.log(minhasSobras);
