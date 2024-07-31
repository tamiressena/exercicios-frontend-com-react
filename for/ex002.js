// Faça um algoritmo que leia um conjunto de 15 valores, um de cada vez, acompanhados de um código 1 ou 2. O valor representa o número de cobaias utilizadas em uma das 15 experiências feitas e os códigos 1 e 2 representam respectivamente coelhos e ratos. Mostre no final, o total de cobaias utilizadas, o total de coelhos, total de ratos, e o percentual de coelhos e ratos.

const prompt = require('readline-sync');

let totalDeCoelhos = 0;
let totalDeRatos = 0;
let qtdTotalDeCobaias = 0;


for (let i = 0; i < 15; i++) {
    tipoDeCobaia = Number(prompt.question('Qual o código da cobaia (1 para coelho, 2 para rato)? '));
    if (tipoDeCobaia === 1) {
        let qtdDeCoelhos = Number(prompt.question('Qual a quantidade de coelhos utilizados? '));
        totalDeCoelhos += qtdDeCoelhos;
        qtdTotalDeCobaias += qtdDeCoelhos;
    } else if (tipoDeCobaia === 2) {
        let qtdDeRatos = Number(prompt.question('Qual a quantidade de ratos utilizados? '));
        totalDeRatos += qtdDeRatos;
        qtdTotalDeCobaias += qtdDeRatos;
    }
}

console.log('Total de coelhos: ', totalDeCoelhos);
console.log('Total de ratos: ', totalDeRatos);
console.log('Total de cobaias: ', qtdTotalDeCobaias);