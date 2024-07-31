// Leia 20 valores reais e calcule seu somatório utilizando a instrução while

const prompt = require('readline-sync');

let somaDosNumeros = 0;

for (let i = 0; i < 20; i++) {
    numeroDoUsuario = Number(prompt.question('Digite um número: '));
    somaDosNumeros += numeroDoUsuario;
}

console.log('A soma dos valores digitados é: ', somaDosNumeros);