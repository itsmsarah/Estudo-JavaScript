function carregarProduto(exibindo){
    setTimeout(() =>{
        console.log("Produto carregado com sucesso!")
        exibindo()

    },1500)
}
 carregarProduto(exibindo)

 function exibindo(){
    console.log("Exibindo detalhas do produto")
 }
 console.log("Carregando Produto")