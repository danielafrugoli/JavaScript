let idade = 17;

let cnh = false;

if(idade >= 18 && cnh != true) {
    console.log("Tá na hora de tirar sua carteira");
} else if(idade >= 18 && cnh == true) {
    console.log("Está habilitado");
} else {
    console.log("Primeiro faça 18 e depois tire a cnh");
}