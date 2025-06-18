let palpite = 0;
let numero = 5;

while (palpite !== numero) {
    palpite = Number(prompt("Faça seu palpite"));

    if (palpite !== numero) {
        console.log("Vish, errou!");
    } else {
        console.log("Acertou!");
    }
}

console.log("Finalmente acertou!");
