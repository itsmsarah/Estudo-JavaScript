let operacao = prompt("Digite um caractere de operação")

switch(operacao){
case "+":
    console.log("Adição")
    break;

case "-":
    console.log("Subtração")
    break;
case "*":
    console.log("Multiplição")
    break;

case "/":
    console.log("Divisão")
    break;

    
    default:
        console.log("Caractere de operação inválido")   
}