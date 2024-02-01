// new serve para instanciar classes;

// cria na função com letra maiúscula 

function Cachorro(raca, patas, cor) { // Cachorro com C maiusculo pois vamos usar o new
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function () {
        console.log("Auuuuuuuuu");
    }
}

let husky = new Cachorro('Husky', 4, 'cinza'); // aqui estamos criando um novo cachorro

husky.uivar();