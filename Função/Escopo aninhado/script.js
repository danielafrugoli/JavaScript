// é escopo dentro de escopo

let y = 5;

const multiplicar = function(n) {
    let y = n * 2;

    console.log(y); // escopo da função, y será 10

    if(y == 10) {
        let y = 55;

        console.log(y);  // escopo if dentro da função, y será 55
    }
}

multiplicar(y); //

console.log(y); // aqui o y será 5, pois é o escopo global
