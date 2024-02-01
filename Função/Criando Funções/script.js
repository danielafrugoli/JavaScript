function imprimirNoConsole() {  // aqui estamos declarando a função
    console.log("Olá mundo!");
}

imprimirNoConsole();  // aqui estamos chamando a função

function imprimirNumero(num) { // aqui passamos um parametro 
    console.log("O número é: " + num);
}

imprimirNumero(2);
imprimirNumero(5);
imprimirNumero(10);


const numeroAleatorio = function() { // aqui é uma função anonima atrelada a uma constante
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();