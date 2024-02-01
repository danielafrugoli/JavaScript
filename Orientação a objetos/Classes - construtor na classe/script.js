// criando class, sempre com letra MAIUSCULA

// criando objetos por classe (método mais utilizado)

// definindo propriedades através do constructor


class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro('Labrador', 4, 'marrom');

console.log(labrador);

//------------------------------------------------------------------------------------

// classe SÓ ACEITA MÉTODOS

// p/ adicionar propriedades na classe, só via prototype


class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir () { // aqui estamos adicionando um método como se fosse uma função
        console.log("Au au")
    }
}

Cachorro.prototype.patas = 4; // aqui estamos dizendo que todo cachorro terá 4 patas

// ---------------------------------------------------------------------------------

// OVERRIDE nas propriedades do prototype

// sempre que adicionamos uma propriedade a um obj, é criada uma identica no prototype

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir () { // aqui estamos adicionando um método como se fosse uma função
        console.log("Au au")
    }
}

Cachorro.prototype.raca = 'SRD'; // aqui estamos dizendo que cachorros que não tiverem raça explicitamente definida, será SRD

console.log(Cachorro.prototype.raca); // vai retornar SRD

console.log(labrador.raca); // vai retornar labrador pq determinamos labrador como 1 raça