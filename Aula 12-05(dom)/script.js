
// PELO ID

// let elemento = document.getElementById('nome-do-id')

// let titulo= document.getElementById("titulo")

// console.log(titulo)

// let paragrafo= document.getElementById("paragrafo")

// console.log(paragrafo)

// SELECIONANDO PELA CLASSE

// let p_text = document.getElementsByClassName("p-text")

// console.log(p_text[0])

// MANIPULAÇÃO COM DOM

let t1= document.getElementById("titulo")
t1.innerText = "Celtics"
t1.style.color ="#ff0000"
t1.style.backgroundColor ="green"

let p1= document.getElementById("paragrafo")
p1.innerText= "Jayson tatum"


let p2= document.getElementById("paragrafo2")
p2.innerText= "Melhor time do mundo"


let p3= document.getElementById("paragrafo3")
p3.innerText= "Vai ser campeão"

// inner.text para elementos especifivcos

let p_aviso=document.getElementById("aviso-importante")
// p_aviso.classList.add("aviso")

// p_aviso.classList.remove("aviso")

p_aviso.classList.toggle("aviso") 
//  mudar uma coisa pra outra, por exemplon se o botao ta ativo, eke desativa


let mother=document.getElementById("cantora_do_seculo")
mother.classList.add("beyonce")
mother.classList.toggle("beyonce")