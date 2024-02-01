// com let e const qualquer bloco de código pode separar escopo (if, while, for...)

let x = 10;

if(true) {
    let x = 20;
    console.log(x); // aqui o x será 20
}

console.log(x); // aqui o x será 10