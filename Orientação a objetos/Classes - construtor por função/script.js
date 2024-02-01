// instanciar = criar um objeto novo

// criando objetos dentro de uma função

function criaCachorro(raca, patas, cor) { // essa função tem 3 parametros: raça, patas e cor
    let cachorro = Object.create({}); // aqui estamos criando o obj cachorro vazio
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function() {
        console.log("Au au");
    }
    return cachorro;
}

let doberman = criaCachorro('Doberman', 4, 'preta'); // aqui ele vai puxar todas as classes criadas dentro da função

console.log(doberman);