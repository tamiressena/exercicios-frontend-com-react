// Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 a 100

let i = 0;

for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i, '² = ', Math.pow(i, 2));
    }
}