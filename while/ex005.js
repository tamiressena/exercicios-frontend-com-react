// Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 a 100

const prompt = require('readline-sync');

let numero = 1;

while (numero <= 100) {
    if (numero % 2 === 0) {
        console.log(numero, '² = ', Math.pow(numero, 2));
    }
    numero++;
}