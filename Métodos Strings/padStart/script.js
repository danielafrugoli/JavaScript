// padStart = insere caracteres ANTES da string

let senha = "12"; // aqui no exemplo essa senha deve ter 6 digitos, mas o usuario só colocou 2

console.log(senha.padStart(6, "0")); // 6 representa o tamanho que a senha deve ficar
                                    // e o 0 representa os numeros adicionados pra chegar no 6
                                    // os 0 serão colocados NO INICIO DA STRING
                                    // ficando 000012