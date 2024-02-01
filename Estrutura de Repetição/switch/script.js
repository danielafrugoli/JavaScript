// quando há necessidade de vários ifs, se usa o switch/ case
// para sair de um case, usar o break (inserir break em todos os cases)
// inserimos o default quando nenhuma condição é true, funciona como else

let nome = "Matheus";

switch(nome) {
    case "Matheus":
        console.log("O nome é Matheus");
        break;
    case "João":
        console.log("O nome é João");
        break;
    default:
        console.log("O nome não foi encontrado");
        break;    
}