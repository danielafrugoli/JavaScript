// escopo da função não é global

let y = 10;

function imprimir() {
    let y = 150;

    console.log(y);
}

imprimir(); // aqui y será 150, pois chamamos a função

console.log(y); // aqui o y será 10, pois o valor da função só funciona nela mesma