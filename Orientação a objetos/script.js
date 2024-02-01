// orientação a objetos = utiliza os objetos como principal principio

// métodos = propriedades que servem como funções (ações dos proprios objetos)
// invocamos os métodos da mesma maneira que as funções, com ()

// criando métodos e funções em objetos:

const cachorro = {
    raca: 'SRD',
    uivar: function() {
        console.log("Auuuuuuuuuuu");
    },
    rosnar: function() {
        console.log("grrrrrr")
    },
    setRaca: function(raca) { // aqui estamos direcionando uma raça pro cachorro
        this.raca = raca; // o this se referencia ao raça
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

cachorro.uivar();
cachorro.rosnar();

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca);

console.log(cachorro.getRaca());

