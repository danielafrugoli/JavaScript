// em orientação a objs, não falamos que vamos criar objs, mas sim classes que instanciam um obj

// objetos passam a ser chamados de classes

let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function() {
        console.log("Au au");
    }
}

let labrador = Object.create(cachorro); // aqui estamos instanciando objs a partir de uma classe

labrador.latir();

labrador.raca = "Labrador"; // aqui estamos atribuindo raça ao labrador

console.log(labrador.raca); // vai retornar raça labrador

console.log(cachorro.raca); // vai retornar SRD = sem raça definida