let x = 10;
let divisoes = 0;

for(let i = 1; i <= x; i++) {
    if(x % i == 0) {
        divisoes++;
    }
}

if(divisoes == 2) {
    console.log(`Este número ${x} é primo`);
} else {
    console.log(`Este número ${x} não é primo`);
}

