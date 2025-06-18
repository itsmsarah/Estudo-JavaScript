let botao =  document.getElementById("menu-toggle")
let menuMobile = document.getElementById("menu-mobile")

botao.addEventListener("click",function(){
    menuMobile.classList.toggle("show")
    botao.classList.toggle("active")
})