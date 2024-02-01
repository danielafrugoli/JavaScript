// tipo mais usado

// além de propriedades, podemos criar a classe base já com métodos;

// o jeito mais correto é atrelar ao obj prototype pai


function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function() { // aqui o método uivar tá sendo criado atrelado ao prototype
    console.log("Auuuuuu");
}

Cachorro.prototype.latir = function () {
    console.log("Au au");
}

let husky = new Cachorro('Husky', 4, 'cinza');

husky.uivar();
husky.latir();