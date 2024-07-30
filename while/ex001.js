// Leia 20 valores reais e calcule seu somatório utilizando a instrução while

const prompt = require('readline-sync');

let contador = 1;

let soma = 0;

let numeroDoUsuario = 0;

while (contador <= 20) {
    contador++;

    numeroDoUsuario = Number(prompt.question('Digite um número: '));

    soma += numeroDoUsuario;
}

console.log('A soma dos 20 valores é: ', soma);