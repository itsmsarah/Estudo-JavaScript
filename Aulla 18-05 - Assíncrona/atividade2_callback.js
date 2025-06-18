function processarDados(mostrando){
    setTimeout(()=>{
        console.log("Dados Processados")
        mostrando()


    },2000)
}
processarDados(mostrando)

function mostrando(){
    setTimeout(() => {
        console.log("Mostrando resultado na tabela")
    }, 2000)
}

console.log("Processando Dados!")
