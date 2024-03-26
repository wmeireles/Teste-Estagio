//a) 1, 3, 5, 7, ___
function proximoElementoA(n) {
    return n + 2;
}
const ultimoElementoA = 7;
const proximoA = proximoElementoA(ultimoElementoA);
console.log(proximoA);

//b) 2, 4, 8, 16, 32, 64, ____
function proximoElementoB(n) {
    return n * 2;
}
const ultimoElementoB = 64;
const proximoB = proximoElementoB(ultimoElementoB);
console.log(proximoB);

//c) 0, 1, 4, 9, 16, 25, 36, ____
function proximoElementoC(n) {
    return Math.pow(Math.floor(Math.sqrt(n)) + 1, 2);
}
const ultimoElementoC = 36;
const proximoC = proximoElementoC(ultimoElementoC);
console.log(proximoC);

//d)4, 16, 36, 64, ____
function proximoElementoD(n) {
    return Math.pow(Math.sqrt(n) + 2, 2);
}
const ultimoElementoD = 64;
const proximoD = proximoElementoD(ultimoElementoD);
console.log(proximoD);

// e) 1, 1, 2, 3, 5, 8, ____
function proximoElementoE(a, b) {
    return a + b;
}
let penultimoE = 3;
let ultimoE = 5;
const proximoE = proximoElementoE(penultimoE, ultimoE);
console.log(proximoE);

// f) 2, 10, 12, 16, 17, 18, 19, ____
function proximoElementoF(n) {
    function ehPrimo(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num !== 1;
    }

    let proxPrimo = n + 1;
    while (!ehPrimo(proxPrimo)) {
        proxPrimo++;
    }
    return proxPrimo;
}
const ultimoElementoF = 19;
const proximoF = proximoElementoF(ultimoElementoF);
console.log(proximoF);
