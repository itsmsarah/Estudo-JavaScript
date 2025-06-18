let letra = prompt("Digite uma dessas quatros letras A,B,C ou D")

switch(letra){
case "A":
    console.log("Excelente")
    break;

case "B":
    console.log("Bom")
    break;
case "C":
    console.log("Regular")
    break;

case "D":
    console.log("Ruim")
    break;

    
    default:
        console.log("Letra inválido")   
}