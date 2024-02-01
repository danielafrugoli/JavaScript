// uma outra forma de escrever funções

// passando função anônima

let consoleTeste = () => {
    console.log("Olá mundo");
}

consoleTeste();


// passando argumentos

let soma = (a,b) => {
    return a + b;
}

console.log(soma(10,20));


// jeito mais enxuto de escrever funções

// aqui escrito normalmente
const multiplicarPorDois = (x) => {
    return x * 2;
}

console.log(multiplicarPorDois(2));


// aqui a mesma de cima, só que enxuta

const multiplicarPorDois2 = x => x * 2;

console.log(multiplicarPorDois2(4));