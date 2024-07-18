//Programa que usa uma funcao para encontrar o dono do pe selecionado

function encontrarDonoPet(usuarios, petProcurado) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].pets.includes(petProcurado)) {
            console.log(`O dono(a) do(a) ${petProcurado} eh o(a) ${usuarios[i].nome}.`);
            return;
        }
    }
    console.log(`Que pena ${petProcurado}, nao encontramos seu dono(a).`);
}

const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

encontrarDonoPet(usuarios, 'Max'); // Procura o dono do pet 'Max'
encontrarDonoPet(usuarios, 'Salsicha'); // Procura o dono do pet 'Salsicha'