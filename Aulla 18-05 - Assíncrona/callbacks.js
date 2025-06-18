// function assarPizza(){
//     setTimeout(() =>{
//         console.log("Pizza Pronta👩‍🍳")
        

//     },2000)
// }

// console.log("Preparando pizza ")
// assarPizza() ;
// //dois minutos executando essa linha, por isso que a pizza pronta é mostrado por úlrimo

// console.log("Comendo pizza")



// function assarPizza(callback){
//     setTimeout(() =>{
//         console.log("Pizza Pronta👩‍🍳")
//         callback() // essa callack é  a função comer pizza, primeiro vc mostra pizza pronta e dps a callback ( de q comida estar pronta)

//     },2000)
// }
// function comerPizza(){
//     console.log("Comendo pizza")
// }
// console.log("Preparando pizza ")
// assarPizza(comerPizza)


// function bemVindo(callback){
//     setTimeout(() => {
//         console.log("Seja bem vindo")
//         callback ()
//     },3000)
// }
// function tchau(){
//     console.log("Tchau")
// }
// bemVindo(tchau)

// function pedirComida(comer){
//     setTimeout(() => {
//         console.log("Pedido feito...Aguarde")
//         console.log("Pedido pronto!")
//         comer()
//     },2000)
// }
// function comer(){
//     console.log("Comendo a comida!")
// }
// pedirComida(comer)

function verificarResultado(uhul,ops){
    let result = 1 + 1

    if(result ==2){
        uhul()
        
    }else{
        ops()
    }
}

function uhul(){
    console.log("Uhull!Número 2")

}
function ops(){
    console.log("Ops, o númeto não é 2")
}
verificarResultado(uhul,ops)
