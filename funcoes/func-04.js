// Funções de retorno exigem a
// cláusula/termo 'return'
//isso permite fazer operções sequenciais com o resultado
//armazenar funções em variáveis
// Exemplo de função com return
function  sobraDoSalario(meuSalario){
    const valorDoAluguel = 1500;
    const valorDoMercado = 500;
    const valorDoTransporte = 300;
    const valorTotal = valorDoAluguel + valorDoMercado + valorDoTransporte;
    const sobra = meuSalario - valorTotal;
    return sobra;
}