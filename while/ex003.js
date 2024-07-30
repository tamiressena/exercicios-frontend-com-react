// Refaça o exercício abaixo (agora em javascript), mas desta vez utilizando as estruturas de repetição, onde o programa deverá finalizar quando o usuário digitar 0, caso
// contrário ficará cadastrando os pedidos, agora vai poder acumular mais de um produto e ao final deverá ser dada a soma dos pedidos.
// O cardápio de uma casa de lanches é dado pela tabela abaixo:

// Código     Produto           Preço Unitário (R$)
// 100        Cachorro quente   R$ 1,70
// 101        Bauru Simples     R$ 2,30
// 102        Bauru com ovo     R$ 2,60
// 103        Hamburguer        R$ 2,40
// 104        Cheeseburguer     R$ 2,50
// 105        Refrigerante      R$ 1,00

// Escreva um algoritmo que leia o código do item adquirido pelo consumidor e a quantidade, calculando e mostrando o valor a pagar. Não será necessário exibir o produto e o valor, somente o valor final.

const prompt = require('readline-sync');

let codigoProduto = Number(prompt.question('Digite o código do produto: '))

let valorFinal = 0;

let qtdProduto = 0;

while (codigoProduto != 0) {
    if (codigoProduto === 100){
        qtdProduto = Number(prompt.question('Digite a quantidade: '));
        valorFinal += (1.7 * qtdProduto)
        codigoProduto = Number(prompt.question('Digite o código do produto: '))
    } else if (codigoProduto === 101){
        qtdProduto = Number(prompt.question('Digite a quantidade: '));
        valorFinal += (2.3 * qtdProduto)
        codigoProduto = Number(prompt.question('Digite o código do produto: '))
    } else if (codigoProduto === 102){
        qtdProduto = Number(prompt.question('Digite a quantidade: '));
        valorFinal += (2.6 * qtdProduto)
        codigoProduto = Number(prompt.question('Digite o código do produto: '))
    } else if (codigoProduto === 103){
        qtdProduto = Number(prompt.question('Digite a quantidade: '));
        valorFinal += (2.4 * qtdProduto)
        codigoProduto = Number(prompt.question('Digite o código do produto: '))
    } else if (codigoProduto === 104){
        qtdProduto = Number(prompt.question('Digite a quantidade: '));
        valorFinal += (2.5 * qtdProduto)
        codigoProduto = Number(prompt.question('Digite o código do produto: '))
    } else if (codigoProduto === 105){
        qtdProduto = Number(prompt.question('Digite a quantidade: '));
        valorFinal += (1 * qtdProduto)
        codigoProduto = Number(prompt.question('Digite o código do produto: '))
    } else {
        codigoProduto = prompt.question('Código inválido! Digite novamente o código do produto: ')
    }
}

console.log('O valor final do pedido é ', valorFinal);