let idades = [24, 29, 32, 45, 33, 98];

let genero = ['Masculino', 'Feminino'];

function verificaElementos (arr) {
    if(arr.length >= 5) {
        console.log("Muitos elementos")
    } else {
        console.log("Poucos elementos")
    }
};

verificaElementos(idades);
verificaElementos(genero);
