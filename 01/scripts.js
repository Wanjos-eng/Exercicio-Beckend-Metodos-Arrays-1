//Programa que trabalha com alguns metodos de array

const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
const frutasInvertidas = frutas.reverse().join(', ');
console.log(frutasInvertidas)

const frutas1 = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
frutas1.shift(); // Remove o primeiro item
frutas1.pop(); // Remove o último item
frutas1.push('Melão'); // Adiciona 'Melão' ao final do array
console.log(frutas1);