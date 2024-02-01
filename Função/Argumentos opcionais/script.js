function soma(a,b) {

    if(a === undefined || b === undefined ) {
        console.log("Esta função precisa ter os dois argumentos");
    } else {
        return a + b;
    }
}

console.log(soma(1)); // aqui vai cair no if, pois colocamos que precisa ter os 2 argumentos

console.log(soma(1,2)); // aqui vai dar 3, caindo no else, pois tem os 2 argumentos