// const pizzaChegou = true;

// const pedido= new Promise((resolve,reject)=>{
//     if(pizzaChegou){
//         resolve("🍕Pizza chegou")
//     }else{
//         reject("Vish n chegou")
//     }
// })

// pedido  
//     .then((resposta)=>{ // O que fazer quando dar certo
//         //aqui você faz algo com o resultado da Promise
//         console.log(resposta)

//     })
//     .catch((error)=>{ //O que fazer quando da errado
//         // Aquo vc trata o erro, se a Promise falhar
            

//     })


// const pronessa = new Promise((resolve,reject) =>{
//     // resolve("Tudo certo")
//     reject("Algo deu errado")

// })

// pronessa

//     .then((res)=>{
//         console.log(res)
//     })

//     .catch((err)=>{
//         console.log(err)
//     })


const verificarResultado = new Promise((resolve,reject)=>{
    let result = 1+1

    if(result==2){
        resolve("Uhul, número 2")
    }else{
        reject("Ops, o número não é 2")
    }
})

verificarResultado
.then(res => console.log(res))
    
        .catch((err)=>{
            console.log(err)
        })