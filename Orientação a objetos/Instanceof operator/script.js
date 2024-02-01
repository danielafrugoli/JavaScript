// usamos instance of para verificar quem é o pai do objeto

class Mamifero { // classe pai com propriedade patas
    constructor(patas) {
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero { // cachorro vira filho do mamífero e herda as propriedades (patas)
    constructor(patas, raca) {
        super(patas, patas); // p/ alterar as patas no objeto pai
        this.raca = raca;
    }
}

let pug = new Cachorro(4, 'Pug');

console.log(new Cachorro instanceof Mamifero); // vai retornar true, pois cachorro é filho do mamifero



