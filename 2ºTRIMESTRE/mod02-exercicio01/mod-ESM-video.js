
export function alugarFilme(nomeFilme, dataAluguel, preco) {
    return `${nomeFilme} alugado para ${dataAluguel} por ${preco}.`
};


export function devolverFilme(nomeFilme, dataAluguel, preco, dataEntrega) {
    return `Fernando alugou ${nomeFilme} no dia: ${dataAluguel} por ${preco} e terá que devolver no dia: ${dataEntrega}.`
};

