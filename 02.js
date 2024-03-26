//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;

  
    if (numero === 0 || numero === 1) {
        return true;
    }


    while (b <= numero) {
        let temp = a + b;
        a = b;
        b = temp;

        if (b === numero) {
            return true;
        }
    }

    return false;
}


const numeroVerificar = 13;


if (verificaFibonacci(numeroVerificar)) {
    console.log(`${numeroVerificar} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroVerificar} não pertence à sequência de Fibonacci.`);
}
