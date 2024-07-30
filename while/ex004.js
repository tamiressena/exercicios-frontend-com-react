// Faça um algoritmo que leia um conjunto de 15 valores, um de cada vez, acompanhados de um código 1 ou 2. O valor representa o número de cobaias utilizadas em uma das 15 experiências feitas e os códigos 1 e 2 representam respectivamente coelhos e ratos. Mostre no final, o total de cobaias utilizadas, o total de coelhos, total de ratos, e o percentual de coelhos e ratos.

const prompt = require('readline-sync');

let contador = 1;
let somaCoelhos = 0;
let somaRatos = 0;
let somaCobaias = 0;

while (contador <= 15) {
    contador ++;
    let qtdDeCobaias = Number(prompt.question('Digite a quantidade de cobaias utilizadas: '));
    let tipoDeCobaia = Number(prompt.question('Digite o código da cobaia utilizada (1 para coelhos e 2 para ratos): '));
    if (tipoDeCobaia === 1) {
        somaCoelhos += qtdDeCobaias;
        somaCobaias += qtdDeCobaias;

    } else if (tipoDeCobaia === 2) {
        somaRatos += qtdDeCobaias;
        somaCobaias += qtdDeCobaias;

    } else {
        Number(prompt.question('Digite um código válido: '))
    }
}

console.log('Total de cobaias utilizadas: ', somaCobaias);
console.log('Total de coelhos utilizados: ', somaCoelhos);
console.log('Total de ratos utilizados: ', somaRatos);
