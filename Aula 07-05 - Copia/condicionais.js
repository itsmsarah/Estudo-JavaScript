// let nota = prompt("Informe uma nota:")

// if (nota>=5){
//     console.log("Aprovado")
// } else{
//     console.log("Reprovado")
// }

// let peso = prompt("Informe seu peso")
// let altura = prompt("Informa sua altura")

// let imc = peso/(altura*altura)

// if(imc < 18.5){
//     // console.log("Abaixo do peso normal")
//     alert("Abaixo do peso normal")
// } else if (imc >= 18.5 && imc<=24.9){
//     console.log("Peso normal")
//     alert("Peso normal")
// }
// else if (imc >= 25.0 && imc<=29.9){
//     console.log("Excesso de peso")
//     alert("Excesso de peso")
// }
// else if (imc >= 30.0 && imc<=34.9){
//     console.log("Obesidade clase I")
//     alert("Obesidade clase I")
// }
// else if (imc >= 35.0 && imc<=39.9){
//     console.log("Obesidade clase II")
//     alert("Obesidade clase II")
// }
// else if (imc >=40.0){
//     console.log("Obesidade clase III")
//     alert("Obesidade clase III")
// }

let dia= prompt("Informe um dia da semana")
switch(dia){
    case "1":
        console.log("Domingo")
        break;

    case "2":
        console.log("Segunda-feira")
        break;
    case "3":
        console.log("Terça-feira")
        break;

    case "4":
        console.log("Quarta-feira")
        break;
        
    case "5":
        console.log("Quinta-feira")
        break;

    case "6":
        console.log("Sexta-feira")
        break;

    case "7":
        console.log("Sábado")
        break;

     default:
        console.log("Dia inválido")   

}