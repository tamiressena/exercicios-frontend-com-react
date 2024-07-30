// Leia 20 valores reais e calcule seu somatório utilizando a instrução do-while

const prompt = require('readline-sync');

contador = 1;

let soma = 0;

do {
    contador++;
    numeroDoUsuario = Number(prompt.question('Informe um número: '))
    soma += numeroDoUsuario;
} while (contador <= 20);

console.log('A soma dos valores é: ', soma);