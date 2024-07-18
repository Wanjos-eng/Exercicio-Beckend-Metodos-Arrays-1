//Programa que atraves de uma função, encontra o carro na posicao informada no segundo parametro e captura os 3 carros subsequentes.

const carros = ['Ford Ka', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 2;

function encontrarCarros(carros, posicao) {
    if (posicao < 0 || posicao >= carros.length) {
        console.log("Posicao invalida. Informe uma posicao dentro dos limites do array.");
        return;
    }

    const carrosEncontrados = carros.slice(posicao, posicao + 4);
    const carrosSelecionados = carrosEncontrados.slice(1, 4);

    console.log(carrosSelecionados.join(' - '));
}

encontrarCarros(carros, posicao);