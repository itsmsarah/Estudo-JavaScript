function baixarAquivo(abrirArquivo){
    setTimeout(() =>{
    console.log("Baixando arquivo...📁")
    console.log("Dowload Concluído✅")
    abrirArquivo()
    },3000)
}
baixarAquivo(abrirArquivo)

 function abrirArquivo(){
    console.log("Abrindo Arquivo📂")
 }
    
 