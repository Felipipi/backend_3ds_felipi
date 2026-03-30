//Crie 4 funções para operações (+, -, *, /)
function somar(a, b) {
    const resultado = a + b;
    console.log("Resultado da soma: " + (a + b));
}

function subtrair(a, b) {
    const resultado = a - b;
    console.log("Resultado da subtração: " + (a - b));
}

function multiplicar(a, b) {
    const resultado = a * b;
    console.log("Resultado da multiplicação: " + (a * b));
}

function dividir(a, b) {
    if (b === 0) {
        console.log("Erro: Divisão por zero não é permitida.");
    }else{
   const resultado = a / b;
    console.log("Resultado da divisão: " + (a / b));
    }
}
somar(5, 3); 

subtrair(21, 16);

multiplicar(4, 7);

dividir(10, 2);
dividir(10, 0);