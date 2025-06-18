function enviarNotificacao(confirmacao){
    setTimeout(() =>{
        console.log("enviando notificação")
        confirmacao()

    },1500)
}
 enviarNotificacao(confirmacao)

 function confirmacao(){
    console.log("Confirmação: notificação entregue")
 }
 console.log("Notificação enviada")
