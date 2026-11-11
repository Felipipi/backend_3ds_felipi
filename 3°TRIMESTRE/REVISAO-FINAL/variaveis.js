// São espaços reservados para armazenar dados voláteis
// MODIFICADORES DE ACESSO: var, let, const

const roupas = ['camiseta', 'vestido', 'jeans', 'bermuda']
//                  1           2         3         4
roupas[999] //undefined
//console.log (roupas[1]) //vestido
//loop de repetição
for (const roupa of roupas) {
    console.log(roupa)
}