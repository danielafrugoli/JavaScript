// symbols são propriedades únicas, que NÃO PODEM SER ALTERADAS E NEM CRIADAS DUAS VEZES;

// podemos utilizar como uma constante (const), só que para propriedade de um obj;

// symbols são propriedades de objetos


class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4;

console.log(Cachorro.prototype[patas]); // acessando o symbol